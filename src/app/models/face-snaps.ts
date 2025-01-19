import { SnapType } from "./snap-type.type";

export class FaceSnap {
    
location?:string;
id:string;

constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public localisation?: string,
    public technologies?: string[],
    public tools?: string[],
    public competencies?: string[],
    public github?: string,
    public videoUrl?:string,
    public website?: string,
    public category?: string,
    
  ){
    this.id= crypto.randomUUID().substring(0,8);
        }

addSnap():void{
    this.snaps++;
}

removeSnap():void {
    this.snaps--;
}

snap(snapType:SnapType){
    if(snapType === 'snap'){
        this.addSnap();
    }
    else if (snapType === 'unsnap'){
        this.removeSnap();
    }
}

setLocation(location:string):void{
    this.location=location;
}

withLocation(location: string): FaceSnap{
    this.setLocation(location);
    return this;
}
}