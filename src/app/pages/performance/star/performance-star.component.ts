import { OnInit, Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DomSanitizer } from '@angular/platform-browser';
import { NbDialogService, NbStepperComponent, NbSpinnerComponent } from '@nebular/theme';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerformanceStarService } from './performance-star.service';
import { PerformanceGenerateStarService } from './performance-star.generate.service';
import { GreenstarComponent } from './greenstar/greenstar.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ISearchPerformanceStarData, ISchoolDetail, IClassSectionDetail, IStudent, IPerformanceStarData } from "./performance-star.interface";

import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';
@Component({
    selector: 'ngx-performance',
    styleUrls: ['./performance-star.component.scss'],
    templateUrl: './performance-star.component.html',
})
export class PerformanceStarComponent implements OnInit {

    // Enable indicators for search inputs
    public isSchoolViewable = false;
    public isClassViewable = false;
    public isMonthViewable = false;
    public isTeamViewable = false;
    public isNameViewable = false;

    //Value holders for search input used to display the value in star
    public schoolName = "";
    public classAndSectionName = "";
    public teamName = "";
    public studentName = "";
    public month = "";


    // Loading indicator used on printing pdf and loading star
    public loading = false;

    // loading drop down values on selection
    public loadingDropdown = false;

    //To enable validation error
    public isSearchDataNotValid = false;

    // To disable or enable the star dispaly nb card
    public isDataAvailable = false;
    public isNoPerfData = false;

    // Holds the value to be displayed in dropdown with the information from backend
    public schoolList: ISchoolDetail[];
    public classList: IClassSectionDetail[];
    public studentList: IStudent[];
    public teamList: string[];

    public searchPerformanceStarData: ISearchPerformanceStarData = {} as ISearchPerformanceStarData;

    public performanceStarData: IPerformanceStarData = {} as IPerformanceStarData;


    constructor(private formBuilder: FormBuilder,
        private performanceStarService: PerformanceStarService,
        private performanceGenerateStarService: PerformanceGenerateStarService) {
    }

    ngOnInit(): void {
        this.searchPerformanceStarData.calcType = "Select";
        this.searchPerformanceStarData.classId = 0;
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.schoolId = 0;
        this.searchPerformanceStarData.studentId = 0;
        this.searchPerformanceStarData.teamName = "Select";

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }
    /**
     * Method to generate performance start based on the search criteria 
     * */
    public generatePerformanceStar() {
        if (!this.validateSearch()) {
            this.loading = true;
            this.performanceGenerateStarService.getPerformanceStar(this.searchPerformanceStarData).subscribe(
                (response) => {
                    console.log(response);
                    this.performanceStarData = response;
                    if (this.performanceStarData.paramOneMonthColorCodes.length > 0) {
                        this.isDataAvailable = true;
                        this.isNoPerfData = false;
                    } else {
                        this.isDataAvailable = false;
                        this.isNoPerfData = true;
                    }
                    this.loading = false;
                },
                error => {
                    console.log("Http Server error", error);
                    this.loading = false;
                }
            );
        }
        this.isSearchDataNotValid = this.validateSearch();
    }


    /**
    * Method to print the star for each param on each page, to change the 
    * svg size while printing the svg size is set to the required size and
    * reset back to support responsiveness
    * */
    public printStar() {
        this.loading = true;
        let starSVGS = document.getElementsByClassName("svgClass");
        console.log("Star Svg's count ==> " + starSVGS.length);
        console.log("starSVGS[0] ==> " + starSVGS[0]);
        // Set the height and width of the star so that the svg will render properly in pdf
        starSVGS[0].setAttribute("width", "500");
        starSVGS[0].setAttribute("height", "500");
        //Dynamically choose the parent since the second step content won't be enabled on the first rendering
        let paramContent = document.getElementsByName("starDisplayContent")[0];
        console.log("Content to be printed ==> " + paramContent.id);

        html2canvas(paramContent, { logging: true }).then(canvas => {
            const paramStar = canvas.toDataURL('image/png')
            let pdf = new jspdf('p', 'mm', 'a4');
            pdf.addImage(paramStar, 'PNG', 20, 50, 0, 0);// change x and y coordinates to print star in centre
            pdf.save('PerformanceStar.pdf'); // Generated PDF
            // Reset the height and width of svg to be responsive
            starSVGS[0].setAttribute("width", "100%");
            starSVGS[0].setAttribute("height", "100%");
            this.loading = false;
        });
    }

    // Method to enable disable input based on the type selection
    public onChangeCalcType(selectedValue: string) {
        this.enableSearchComponents(selectedValue);
        // Reset other dropdowns
        this.searchPerformanceStarData.schoolId = 0;
        this.searchPerformanceStarData.classId = 0;
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.studentId = 0;
        this.searchPerformanceStarData.teamName = "Select";
        // Populate school list
        if (this.searchPerformanceStarData.calcType != 'Select') {
            this.loadingDropdown = true;
            this.performanceStarService.getSchools().subscribe(
                (response) => {
                    console.log(response);
                    this.schoolList = response;
                    this.loadingDropdown = false;
                },
                error => {
                    console.log("Http Server error", error);
                    this.loadingDropdown = false;
                },

            );
        }
        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    // Method to enable disable input based on the type selection
    public onChangeSchoolChange($event) {
        this.schoolName = $event.target.options[$event.target.options.selectedIndex].text;
        // Reset other dropdowns
        this.searchPerformanceStarData.classId = 0;
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.studentId = 0;
        this.searchPerformanceStarData.teamName = "Select";
        // Populate class details
        if (this.searchPerformanceStarData.schoolId != 0) {
            this.loadingDropdown = true;
            let schoolDetail: ISchoolDetail = {} as ISchoolDetail;
            schoolDetail.id = this.searchPerformanceStarData.schoolId;
            this.performanceStarService.getClassList(schoolDetail).subscribe(
                (response) => {
                    console.log(response);
                    this.classList = response;
                    this.loadingDropdown = false;
                },
                error => {
                    console.log("Http Server error", error);
                    this.loadingDropdown = false;
                }
            );
        }
        //Reset the dropdown values
        this.classList = [];
        this.studentList = [];
        this.teamList = [];

        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    public onChangeClassChange($event) {
        this.classAndSectionName = $event.target.options[$event.target.options.selectedIndex].text;
        // Reset other dropdowns
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.studentId = 0;
        this.searchPerformanceStarData.teamName = "Select";

        // Populate student and team details
        if (this.searchPerformanceStarData.classId != 0) {
            this.loadingDropdown = true;
            let classDetail: IClassSectionDetail = {} as IClassSectionDetail;
            classDetail.id = this.searchPerformanceStarData.classId;
            this.performanceStarService.getClassDetail(classDetail).subscribe(
                (response) => {
                    console.log(response);
                    this.studentList = response.studentList;
                    this.teamList = response.teamList;
                    this.loadingDropdown = false;
                },
                error => {
                    console.log("Http Server error", error);
                    this.loadingDropdown = false;
                }
            );
        }
        //Reset the dropdown values
        this.studentList = [];
        this.teamList = [];

        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    public onChangeStudentChange($event) {
        this.studentName = $event.target.options[$event.target.options.selectedIndex].text;
        // Reset other dropdowns
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.teamName = "Select";
        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    public onChangeTeamChange($event) {
        this.teamName = $event.target.options[$event.target.options.selectedIndex].text;
        // Reset other dropdowns
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.studentId = 0;
        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    public onChangeMonthChange($event) {
        this.month = $event.target.options[$event.target.options.selectedIndex].text;
        //Reset error message
        this.isSearchDataNotValid = false;

        //Hide the star div
        this.isDataAvailable = false;
        this.isNoPerfData = false;
    }

    private enableSearchComponents(selectedValue: string) {
        if (selectedValue == "Individual") {
            this.isSchoolViewable = true;
            this.isClassViewable = true;
            this.isMonthViewable = true;
            this.isNameViewable = true;
            this.isTeamViewable = false;
        } else if (selectedValue == "Team") {
            this.isSchoolViewable = true;
            this.isClassViewable = true;
            this.isMonthViewable = true;
            this.isNameViewable = false;
            this.isTeamViewable = true;
        } else if (selectedValue == "Class") {
            this.isSchoolViewable = true;
            this.isClassViewable = true;
            this.isMonthViewable = true;
            this.isNameViewable = false;
            this.isTeamViewable = false;
        } else if (selectedValue == "School") {
            this.isSchoolViewable = true;
            this.isMonthViewable = true;
            this.isClassViewable = false;
            this.isNameViewable = false;
            this.isTeamViewable = false;
        } else if (selectedValue == "Select") {
            this.isSchoolViewable = false;
            this.isMonthViewable = false;
            this.isClassViewable = false;
            this.isNameViewable = false;
            this.isTeamViewable = false;
            this.schoolList = [];
        }
        //Reset the dropdown values
        this.searchPerformanceStarData.classId = 0;
        this.searchPerformanceStarData.month = 0;
        this.searchPerformanceStarData.schoolId = 0;
        this.searchPerformanceStarData.studentId = 0;
        this.searchPerformanceStarData.teamName = "Select";

        //Reset the dropdown values
        this.classList = [];
        this.studentList = [];
        this.teamList = [];
    }

    private validateSearch(): boolean {
        let isSearchNotValid = false;
        if (this.searchPerformanceStarData.calcType == "Individual") {
            if (this.searchPerformanceStarData.schoolId == 0 ||
                this.searchPerformanceStarData.classId == 0 ||
                this.searchPerformanceStarData.studentId == 0 ||
                this.searchPerformanceStarData.month == 0) {
                isSearchNotValid = true;
            }
        } else if (this.searchPerformanceStarData.calcType == "Team") {
            if (this.searchPerformanceStarData.schoolId == 0 ||
                this.searchPerformanceStarData.classId == 0 ||
                this.searchPerformanceStarData.month == 0 ||
                this.searchPerformanceStarData.teamName == "Select") {
                isSearchNotValid = true;
            }
        } else if (this.searchPerformanceStarData.calcType == "Class") {
            if (this.searchPerformanceStarData.schoolId == 0 ||
                this.searchPerformanceStarData.classId == 0 ||
                this.searchPerformanceStarData.month == 0) {
                isSearchNotValid = true;
            }
        } else if (this.searchPerformanceStarData.calcType == "School") {
            if (this.searchPerformanceStarData.schoolId == 0 ||
                this.searchPerformanceStarData.month == 0) {
                isSearchNotValid = true;
            }
        } else if (this.searchPerformanceStarData.calcType == "Select") {
            isSearchNotValid = true;
        }
        return isSearchNotValid;
    }
}
