import { SmartTableDatePickerComponent } from "../../@theme/components/smart-table-date-picker-component/smart-table-date-picker.components";
import { IPerformanceParam, ISchoolDetail } from "./school.interface";

export class SchoolData {
    
    public static schoolDetail: ISchoolDetail = {} as ISchoolDetail;

    public static getSchoolTableSetting(): any {
        let settings: any = {
          edit: {
            editButtonContent: '<i class="ion-edit"></i>'
          },
          delete: {
            deleteButtonContent: '<i class="ion-eye"></i>'
          },
          mode: 'external',
          pager: { display: true, perPage: 5 },
          actions: { add: false, position: 'right' },
    
          columns: {
            schoolName: {
              title: 'School Name',
              type: 'string',
            },
            address: {
              title: 'Address',
              type: 'string',
            },
            district: {
              title: 'District',
              type: 'string',
            }
          }
        };    
        return settings;
      }

      public static getSchoolTableRestrictedSetting(): any {
        let settings: any = {
        edit: {
            editButtonContent: '<i class="ion-edit"></i>'
            },
            delete: {
            deleteButtonContent: '<i class="ion-eye"></i>'
            },
          mode: 'external',
          pager: { display: true, perPage: 5 },
          actions: { add: false, edit:false, position: 'right' },
    
          columns: {
            schoolName: {
              title: 'School Name',
              type: 'string',
            },
            address: {
              title: 'Address',
              type: 'string',
            },
            district: {
              title: 'District',
              type: 'string',
            }
          }
        };    
        return settings;
      }

    public static getClassTableSetting(action: string): any {
        let settings: any;
        if (action == 'view') {
            settings = {
                actions: { add: false, edit: false, delete: false },
                columns: {
                    className: {
                        title: 'Class',
                        type: 'string'
                    },
                    sectionName: {
                        title: 'Section',
                        type: 'string'
                    }
                }
            };
        } else {
            settings = {
                add: {
                    addButtonContent: '<i class="nb-plus"></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmCreate: true
                },
                edit: {
                    editButtonContent: '<i class="nb-edit"></i>',
                    saveButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmSave: true
                },
                delete: {
                    deleteButtonContent: '<i class="nb-trash"></i>',
                    confirmDelete: true
                },
                columns: {
                    className: {
                        title: 'Class',
                        type: 'string'
                    },
                    sectionName: {
                        title: 'Section',
                        type: 'string'
                    }
                }
            };
        }
        return settings;
    }

    public static getPerfParamTableSetting(action: string): any {
        let settings: any;
        if (action == 'view') {
            settings = {
                actions: { add: false, edit: false, delete: false },
                hideSubHeader: true,
                columns: {
                    paramTitle: {
                        title: 'Parameter Title',
                        type: 'string',
                    },
                    paramDesc: {
                        title: 'Parameter Description',
                        type: 'string',
                    }
                }
            };
        } else {
            settings = {
                edit: {
                    editButtonContent: '<i class="ion-edit"></i>',
                    saveButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmSave: true
                },
                actions: { delete: false },
                hideSubHeader: true,
                columns: {
                    paramTitle: {
                        title: 'Parameter Title',
                        type: 'string',
                    },
                    paramDesc: {
                        title: 'Parameter Description',
                        type: 'string',
                    }
                }
            };
        }
        return settings;
    }

    public static getSchoolHolidaySetting(action: string): any {
        let settings: any;
        if (action == 'view') {
            console.log('action ==> ' + action);
            settings = {
                actions: { add: false, edit: false, delete: false },
                columns: {
                    fromDate: {
                        title: 'From Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    toDate: {
                        title: 'To Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    description: {
                        title: 'Description',
                        type: 'string'
                    }
                }
            };
        } else {
            settings = {
                add: {
                    addButtonContent: '<i class="nb-plus"></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmCreate: true
                },
                edit: {
                    editButtonContent: '<i class="nb-edit"></i>',
                    saveButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmSave: true
                },
                delete: {
                    deleteButtonContent: '<i class="nb-trash"></i>',
                    confirmDelete: true
                },
                columns: {
                    fromDate: {
                        title: 'From Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    toDate: {
                        title: 'To Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    description: {
                        title: 'Description',
                        type: 'string'
                    }
                }
            };
        }
        return settings;
    }

    public static getSchoolWeekendWorkingSetting(action: string): any {
        let settings: any;
        if (action == 'view') {
            settings = {
                actions: { add: false, edit: false, delete: false },
                columns: {
                    workingDate: {
                        title: 'Working Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    reason: {
                        title: 'Reason',
                        type: 'string'
                    }
                }
            };
        } else {
            settings = {
                add: {
                    addButtonContent: '<i class="nb-plus"></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmCreate: true
                },
                edit: {
                    editButtonContent: '<i class="nb-edit"></i>',
                    saveButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmSave: true
                },
                delete: {
                    deleteButtonContent: '<i class="nb-trash"></i>',
                    confirmDelete: true
                },
                columns: {
                    workingDate: {
                        title: 'Working Date',
                        type: 'html',
                        editor: { type: 'custom', component: SmartTableDatePickerComponent }
                    },
                    reason: {
                        title: 'Reason',
                        type: 'string'
                    }
                }
            };
        }
        return settings;
    }

    public static createSchoolDetailObject(): ISchoolDetail {

        // school information
        this.schoolDetail.schoolName = '';
        this.schoolDetail.address = '';
        this.schoolDetail.cityName = '';
        this.schoolDetail.state = '--Select State--';
        this.schoolDetail.district = '--Select District--';
        // class detail
        this.schoolDetail.classList = [];
        // default performance parameters initialized
        this.schoolDetail.perfParamList = this.getDefaultPerfParamDetail();
        // holidays
        this.schoolDetail.holidays = [];

        // weekend working days
        this.schoolDetail.weekendWorkingDays = [];

        return this.schoolDetail;
    }

    public static getDefaultPerfParamDetail(): IPerformanceParam[] {

        var parameterList: IPerformanceParam[] = [
            { id: null, paramTitle: 'Attendance', paramDesc: 'Attendance Performance' },
            { id: null, paramTitle: 'Discipline', paramDesc: 'Discipline Performance' },
            { id: null, paramTitle: 'Homework', paramDesc: 'Homework Performance' }
        ];
        return parameterList;
    }

    public static getStates(): any {
        const stateList = [{ "stateName": "DADRA AND NAGAR HAVELI", "districts": ["DADRA AND NAGAR HAVELI"] }, { "stateName": "RAJASTHAN", "districts": ["AJMER", "ALWAR", "BANSWARA", "BARAN", "BARMER", "BHARATPUR", "BHILWARA", "BIKANER", "BUNDI", "CHITTORGARH", "CHURU", "DAUSA", "DHOLPUR", "DUNGARPUR", "GANGANAGAR", "HANUMANGARH", "JAIPUR", "JAISALMER", "JALORE", "JHALAWAR", "JHUNJHUNU", "JODHPUR", "KARAULI", "KOTA", "NAGAUR", "PALI", "PRATAPGARH", "RAJSAMAND", "SAWAI MADHOPUR", "SIKAR", "SIROHI", "TONK", "UDAIPUR"] }, { "stateName": "HIMACHAL PRADESH", "districts": ["BILASPUR", "CHAMBA", "HAMIRPUR", "KANGRA", "KINNAUR", "KULLU", "LAHUL AND SPITI", "MANDI", "SHIMLA", "SIRMAUR", "SOLAN", "UNA"] }, { "stateName": "NAGALAND", "districts": ["DIMAPUR", "KIPHIRE", "KOHIMA", "LONGLENG", "MOKOKCHUNG", "MON", "PEREN", "PHEK", "TUENSANG", "WOKHA", "ZUNHEBOTO"] }, { "stateName": "UTTARAKHAND", "districts": ["ALMORA", "BAGESHWAR", "CHAMOLI", "CHAMPAWAT", "DEHRADUN", "HARIDWAR", "NAINITAL", "PAURI GARHWAL", "PITHORAGARH", "RUDRA PRAYAG", "TEHRI GARHWAL", "UDAM SINGH NAGAR", "UTTAR KASHI"] }, { "stateName": "ANDHRA PRADESH", "districts": ["ANANTAPUR", "CHITTOOR", "EAST GODAVARI", "GUNTUR", "KRISHNA", "KURNOOL", "PRAKASAM", "SPSR NELLORE", "SRIKAKULAM", "VISAKHAPATANAM", "VIZIANAGARAM", "WEST GODAVARI", "Y.S.R."] }, { "stateName": "MADHYA PRADESH", "districts": ["AGAR MALWA", "ALIRAJPUR", "ANUPPUR", "ASHOKNAGAR", "BALAGHAT", "BARWANI", "BETUL", "BHIND", "BHOPAL", "BURHANPUR", "CHHATARPUR", "CHHINDWARA", "DAMOH", "DATIA", "DEWAS", "DHAR", "DINDORI", "EAST NIMAR", "GUNA", "GWALIOR", "HARDA", "HOSHANGABAD", "INDORE", "JABALPUR", "JHABUA", "KATNI", "KHARGONE", "MANDLA", "MANDSAUR", "MORENA", "NARSINGHPUR", "NEEMUCH", "PANNA", "RAISEN", "RAJGARH", "RATLAM", "REWA", "SAGAR", "SATNA", "SEHORE", "SEONI", "SHAHDOL", "SHAJAPUR", "SHEOPUR", "SHIVPURI", "SIDHI", "SINGRAULI", "TIKAMGARH", "UJJAIN", "UMARIA", "VIDISHA"] }, { "stateName": "LAKSHADWEEP", "districts": ["LAKSHADWEEP DISTRICT"] }, { "stateName": "KERALA", "districts": ["ALAPPUZHA", "ERNAKULAM", "IDUKKI", "KANNUR", "KASARAGOD", "KOLLAM", "KOTTAYAM", "KOZHIKODE", "MALAPPURAM", "PALAKKAD", "PATHANAMTHITTA", "THIRUVANANTHAPURAM", "THRISSUR", "WAYANAD"] }, { "stateName": "MEGHALAYA", "districts": ["EAST GARO HILLS", "EAST JAINTIA HILLS", "EAST KHASI HILLS", "NORTH GARO HILLS", "RI BHOI", "SOUTH GARO HILLS", "SOUTH WEST GARO HILLS", "SOUTH WEST KHASI HILLS", "WEST GARO HILLS", "WEST JAINTIA HILLS", "WEST KHASI HILLS"] }, { "stateName": "SIKKIM", "districts": ["EAST DISTRICT", "NORTH DISTRICT", "SOUTH DISTRICT", "WEST DISTRICT"] }, { "stateName": "CHHATTISGARH", "districts": ["BALOD", "BALODA BAZAR", "BALRAMPUR", "BASTAR", "BEMETARA", "BIJAPUR", "BILASPUR", "DANTEWADA", "DHAMTARI", "DURG", "GARIYABAND", "JANJGIR-CHAMPA", "JASHPUR", "KABIRDHAM", "KANKER", "KONDAGAON", "KORBA", "KOREA", "MAHASAMUND", "MUNGELI", "NARAYANPUR", "RAIGARH", "RAIPUR", "RAJNANDGAON", "SUKMA", "SURAJPUR", "SURGUJA"] }, { "stateName": "TAMIL NADU", "districts": ["Ariyalur", "CHENNAI", "COIMBATORE", "CUDDALORE", "DHARMAPURI", "DINDIGUL", "ERODE", "KANCHIPURAM", "KANNIYAKUMARI", "KARUR", "KRISHNAGIRI", "MADURAI", "NAGAPATTINAM", "NAMAKKAL", "PERAMBALUR", "PUDUKKOTTAI", "RAMANATHAPURAM", "SALEM", "SIVAGANGA", "THANJAVUR", "THENI", "THE NILGIRIS", "THIRUVALLUR", "THIRUVARUR", "TIRUCHIRAPPALLI", "TIRUNELVELI", "TIRUPPUR", "TIRUVANNAMALAI", "TUTICORIN", "VELLORE", "VILLUPURAM", "VIRUDHUNAGAR"] }, { "stateName": "BIHAR", "districts": ["ARARIA", "ARWAL", "AURANGABAD", "BANKA", "BEGUSARAI", "BHAGALPUR", "BHOJPUR", "BUXAR", "DARBHANGA", "GAYA", "GOPALGANJ", "JAMUI", "JEHANABAD", "KAIMUR (BHABUA)", "KATIHAR", "KHAGARIA", "KISHANGANJ", "LAKHISARAI", "MADHEPURA", "MADHUBANI", "MUNGER", "MUZAFFARPUR", "NALANDA", "NAWADA", "PASHCHIM CHAMPARAN", "PATNA", "PURBI CHAMPARAN", "PURNIA", "ROHTAS", "SAHARSA", "SAMASTIPUR", "SARAN", "SHEIKHPURA", "SHEOHAR", "SITAMARHI", "SIWAN", "SUPAUL", "VAISHALI"] }, { "stateName": "GUJARAT", "districts": ["AHMADABAD", "AMRELI", "ANAND", "ARVALLI", "BANAS KANTHA", "BHARUCH", "BHAVNAGAR", "BOTAD", "CHHOTAUDEPUR", "DANG", "DEVBHUMI DWARKA", "DOHAD", "GANDHINAGAR", "GIR SOMNATH", "JAMNAGAR", "JUNAGADH", "KACHCHH", "KHEDA", "MAHESANA", "Mahisagar", "MORBI", "NARMADA", "NAVSARI", "PANCH MAHALS", "PATAN", "PORBANDAR", "RAJKOT", "SABAR KANTHA", "SURAT", "SURENDRANAGAR", "TAPI", "VADODARA", "VALSAD"] }, { "stateName": "ODISHA", "districts": ["ANUGUL", "BALANGIR", "BALESHWAR", "BARGARH", "BHADRAK", "BOUDH", "CUTTACK", "DEOGARH", "DHENKANAL", "GAJAPATI", "GANJAM", "JAGATSINGHAPUR", "JAJAPUR", "JHARSUGUDA", "KALAHANDI", "KANDHAMAL", "KENDRAPARA", "KENDUJHAR", "KHORDHA", "KORAPUT", "MALKANGIRI", "MAYURBHANJ", "NABARANGPUR", "NAYAGARH", "NUAPADA", "PURI", "RAYAGADA", "SAMBALPUR", "SONEPUR", "SUNDARGARH"] }, { "stateName": "WEST BENGAL", "districts": ["24 PARAGANAS NORTH", "24 PARAGANAS SOUTH", "Alipurduar", "BANKURA", "BARDHAMAN", "BIRBHUM", "COOCHBEHAR", "DARJEELING", "DINAJPUR DAKSHIN", "DINAJPUR UTTAR", "HOOGHLY", "HOWRAH", "JALPAIGURI", "KOLKATA", "MALDAH", "MEDINIPUR EAST", "MEDINIPUR WEST", "MURSHIDABAD", "NADIA", "PURULIA"] }, { "stateName": "GOA", "districts": ["NORTH GOA", "SOUTH GOA"] }, { "stateName": "UTTAR PRADESH", "districts": ["AGRA", "ALIGARH", "ALLAHABAD", "AMBEDKAR NAGAR", "Amethi", "AMROHA", "AURAIYA", "AZAMGARH", "BAGHPAT", "BAHRAICH", "BALLIA", "BALRAMPUR", "BANDA", "BARABANKI", "BAREILLY", "BASTI", "BHADOHI", "BIJNOR", "BUDAUN", "BULANDSHAHR", "CHANDAULI", "CHITRAKOOT", "DEORIA", "ETAH", "ETAWAH", "FAIZABAD", "FARRUKHABAD", "FATEHPUR", "FIROZABAD", "GAUTAM BUDDHA NAGAR", "GHAZIABAD", "GHAZIPUR", "GONDA", "GORAKHPUR", "HAMIRPUR", "HAPUR", "HARDOI", "HATHRAS", "JALAUN", "JAUNPUR", "JHANSI", "KANNAUJ", "KANPUR DEHAT", "KANPUR NAGAR", "Kasganj", "KAUSHAMBI", "KHERI", "KUSHI NAGAR", "LALITPUR", "LUCKNOW", "MAHARAJGANJ", "MAHOBA", "MAINPURI", "MATHURA", "MAU", "MEERUT", "MIRZAPUR", "MORADABAD", "MUZAFFARNAGAR", "PILIBHIT", "PRATAPGARH", "RAE BARELI", "RAMPUR", "SAHARANPUR", "SAMBHAL", "SANT KABEER NAGAR", "SHAHJAHANPUR", "SHAMLI", "SHRAVASTI", "SIDDHARTH NAGAR", "SITAPUR", "SONBHADRA", "SULTANPUR", "UNNAO", "VARANASI"] }, { "stateName": "TRIPURA", "districts": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"] }, { "stateName": "CHANDIGARH", "districts": ["CHANDIGARH"] }, { "stateName": "TELANGANA", "districts": ["ADILABAD", "BHADRADRI", "HYDERABAD", "Jagitial", "JANGOAN", "JAYASHANKAR", "JOGULAMBA", "KAMAREDDY", "KARIMNAGAR", "KHAMMAM", "KOMARAM BHEEM ASIFABAD", "MAHABUBABAD", "MAHBUBNAGAR", "MANCHERIAL", "MEDAK", "MEDCHAL", "NAGARKURNOOL", "NALGONDA", "Nirmal", "NIZAMABAD", "PEDDAPALLI", "RAJANNA", "RANGAREDDI", "SANGAREDDY", "SIDDIPET", "SURYAPET", "VIKARABAD", "WANAPARTHY", "WARANGAL", "WARANGAL URBAN", "YADADRI"] }, { "stateName": "JAMMU AND KASHMIR", "districts": ["ANANTNAG", "BADGAM", "BANDIPORA", "BARAMULLA", "DODA", "GANDERBAL", "JAMMU", "KARGIL", "KATHUA", "KISHTWAR", "KULGAM", "KUPWARA", "LEH LADAKH", "POONCH", "PULWAMA", "RAJAURI", "RAMBAN", "REASI", "SAMBA", "SHOPIAN", "SRINAGAR", "UDHAMPUR"] }, { "stateName": "MANIPUR", "districts": ["BISHNUPUR", "CHANDEL", "CHURACHANDPUR", "IMPHAL EAST", "IMPHAL WEST", "SENAPATI", "TAMENGLONG", "THOUBAL", "UKHRUL"] }, { "stateName": "MIZORAM", "districts": ["AIZAWL", "CHAMPHAI", "KOLASIB", "LAWNGTLAI", "LUNGLEI", "MAMIT", "SAIHA", "SERCHHIP"] }, { "stateName": "JHARKHAND", "districts": ["BOKARO", "CHATRA", "DEOGHAR", "DHANBAD", "DUMKA", "EAST SINGHBUM", "GARHWA", "GIRIDIH", "GODDA", "GUMLA", "HAZARIBAGH", "JAMTARA", "KHUNTI", "KODERMA", "LATEHAR", "LOHARDAGA", "PAKUR", "PALAMU", "RAMGARH", "RANCHI", "SAHEBGANJ", "SARAIKELA KHARSAWAN", "SIMDEGA", "WEST SINGHBHUM"] }, { "stateName": "MAHARASHTRA", "districts": ["AHMEDNAGAR", "AKOLA", "AMRAVATI", "AURANGABAD", "BEED", "BHANDARA", "BULDHANA", "CHANDRAPUR", "DHULE", "GADCHIROLI", "GONDIA", "HINGOLI", "JALGAON", "JALNA", "KOLHAPUR", "LATUR", "MUMBAI", "MUMBAI SUBURBAN", "NAGPUR", "NANDED", "NANDURBAR", "NASHIK", "OSMANABAD", "PALGHAR", "PARBHANI", "PUNE", "RAIGAD", "RATNAGIRI", "SANGLI", "SATARA", "SINDHUDURG", "SOLAPUR", "THANE", "WARDHA", "WASHIM", "YAVATMAL"] }, { "stateName": "HARYANA", "districts": ["AMBALA", "BHIWANI", "CHARKI DADRI", "FARIDABAD", "FATEHABAD", "GURUGRAM", "HISAR", "JHAJJAR", "JIND", "KAITHAL", "KARNAL", "KURUKSHETRA", "MAHENDRAGARH", "MEWAT", "PALWAL", "PANCHKULA", "PANIPAT", "REWARI", "ROHTAK", "SIRSA", "SONIPAT", "YAMUNANAGAR"] }, { "stateName": "DAMAN AND DIU", "districts": ["DAMAN", "DIU"] }, { "stateName": "ARUNACHAL PRADESH", "districts": ["ANJAW", "CHANGLANG", "DIBANG VALLEY", "EAST KAMENG", "EAST SIANG", "Kra Daadi", "KURUNG KUMEY", "LOHIT", "LONGDING", "LOWER DIBANG VALLEY", "LOWER SUBANSIRI", "NAMSAI", "PAPUM PARE", "SIANG", "TAWANG", "TIRAP", "UPPER SIANG", "UPPER SUBANSIRI", "WEST KAMENG", "WEST SIANG"] }, { "stateName": "DELHI", "districts": ["CENTRAL", "EAST", "NEW DELHI", "NORTH", "NORTH EAST", "NORTH WEST", "SHAHDARA", "SOUTH", "South East", "SOUTH WEST", "WEST"] }, { "stateName": "ANDAMAN AND NICOBAR ISLANDS", "districts": ["NICOBARS", "NORTH AND MIDDLE ANDAMAN", "SOUTH ANDAMANS"] }, { "stateName": "PUNJAB", "districts": ["AMRITSAR", "BARNALA", "BATHINDA", "FARIDKOT", "FATEHGARH SAHIB", "FAZILKA", "FIROZEPUR", "GURDASPUR", "HOSHIARPUR", "JALANDHAR", "KAPURTHALA", "LUDHIANA", "MANSA", "MOGA", "NAWANSHAHR", "PATHANKOT", "PATIALA", "RUPNAGAR", "SANGRUR", "S.A.S Nagar", "SRI MUKTSAR SAHIB", "Tarn Taran"] }, { "stateName": "PUDUCHERRY", "districts": ["KARAIKAL", "MAHE", "PONDICHERRY", "YANAM"] }, { "stateName": "ASSAM", "districts": ["BAKSA", "BARPETA", "BONGAIGAON", "CACHAR", "CHIRANG", "DARRANG", "DHEMAJI", "DHUBRI", "DIBRUGARH", "DIMA HASAO", "GOALPARA", "GOLAGHAT", "HAILAKANDI", "JORHAT", "KAMRUP", "KAMRUP METRO", "KARBI ANGLONG", "KARIMGANJ", "KOKRAJHAR", "LAKHIMPUR", "MARIGAON", "NAGAON", "NALBARI", "SIVASAGAR", "SONITPUR", "TINSUKIA", "UDALGURI"] }, { "stateName": "KARNATAKA", "districts": ["BAGALKOT", "BALLARI", "BELAGAVI", "BENGALURU RURAL", "BENGALURU URBAN", "BIDAR", "CHAMARAJANAGAR", "CHIKBALLAPUR", "CHIKKAMAGALURU", "CHITRADURGA", "DAKSHIN KANNAD", "DAVANGERE", "DHARWAD", "GADAG", "HASSAN", "HAVERI", "KALABURAGI", "KODAGU", "KOLAR", "KOPPAL", "MANDYA", "MYSURU", "RAICHUR", "RAMANAGARA", "SHIVAMOGGA", "TUMAKURU", "UDUPI", "UTTAR KANNAD", "VIJAYAPURA", "YADGIR"] }];
        return stateList;
    }

}
