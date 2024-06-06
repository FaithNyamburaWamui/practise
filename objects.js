const SmartPhone={
    brand:"Tecno",
    model:"Pro max",
    storageCapacity:"64",
    color:"Black",
    isOn:false,

powerOn(){
    if(this.isOn!=true){
        this.isOn=true
    }
    console.log(this.isOn);
},

powerOff(){
    if(this.isOn!=false){
        this.isOn=false
    }
    console.log(this.isOn)
},

sendText(message,recipient){
    this.message=message;
    this.recipient=recipient;
  console.log(`${this.brand} can send ${this.message} to ${this.recipient}`);
},

takePhoto(){
    console.log(`${this.brand} can take good pictures`)
}

}
SmartPhone.powerOn();
SmartPhone.powerOff();
SmartPhone.sendText("You have no balance","John");
SmartPhone.takePhoto();

const Book={
    tittle:"Ghostbusters",
    author:"Jack Black",
    gerne:"Fantasy",
    publishYear:2010,
    PageNumber:300,
    isRead:false,

    sleep(){
        if(this.isRead!=false){
          this.isRead=false
        }
        console.log(this.isRead)
    },

    wakeUp(){
        if(this.isRead!=true){
            this.isRead=true
          }
          console.log(this.isRead)
      },

      runProgram(programName){
        this.programName=programName;
          console.log(`${this.programName} which is ${this.gerne} and was published ${this.publishYear}`)
      },

      saveFile(fileName){
        this.fileName=fileName;
        console.log(`${this.fileName} was made by by ${this.author}`)
      }
    }

Book.sleep();
Book.wakeUp();
Book.runProgram("Trade mark");
Book.saveFile("Favourite books");


const Loptop={
    brand:"HP",
    model:"Elite",
    screenSize:20,
    processor:"Macbook",
    RAM:20,
    isSleep:true,

    sleep(){
        if(this.isSleep!=true){
            this.isSleep=true
        }
        console.log(this.isSleep)
    },

    wakeUp(){
        if(this.isSleep!=false){
            this.isSleep=false
        }
        console.log(this.isSleep)
    },

    runProgram(programName){
       console.log(`Your program is ${programName}`)
    },

    saveFile(fileName){
       console.log(`The file name is ${fileName}`)
    }
}

Loptop.sleep();
Loptop.wakeUp();
Loptop.runProgram("Local link");
Loptop.saveFile("Document");

