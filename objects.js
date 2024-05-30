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
