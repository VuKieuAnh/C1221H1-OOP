class Phone {
    constructor(draft, inbox, sent) {
        this.battery = 100;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }

    checkStatus(){
        return this.battery>0;
    }

    textMessage(text){
        this.draft = text;
    }

    sendMessage(dtnhan){
        //1.chuyển thư nháp của điện thoại hiện taị vào hộp thư đến của đt được nhận
        dtnhan.inbox.push(this.draft);
        //2.chuyển thư nháp của đt hiện tại vào thư đã gử của đt hiện tại
        this.sent.push(this.draft);
        //3.xoá thư nháp
        this.draft="";
        this.battery--;
        dtnhan.battery--;
    }
    showInbox(){
        return this.inbox;
    }
}

let luong = new Phone("", [], []);
let bach = new Phone("", [], []);
