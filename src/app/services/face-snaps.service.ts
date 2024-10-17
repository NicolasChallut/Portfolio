import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps";
import { SnapType } from "../models/snap-type.type";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Printit',
      'images/printit.png',
      'Ajout d’un carrousel dynamique à la bannière avec du JS de base',
      new Date(),
      90
    ),

    new FaceSnap(
      'Chic Dressing',
      'images/chic-dressing.png',
      'Yumi !',
      new Date(),
      8
    ),

    new FaceSnap(
      'Snapface',
      'images/snapface-logo.png',
      'Yumi !',
      new Date(),
      8
    ),
    
    new FaceSnap(
      'Med.it',
      'images/medit.png',
      'Yumi !',
      new Date(),
      8
    ),
    
    new FaceSnap(
      'Mota galerie',
      'images/motaphoto.png',
      'Yumi !',
      new Date(),
      8
    ),

    new FaceSnap(
      'koukaki',
      'images/koukaki.png',
      'Magnifique randonnée',
      new Date(),
      180
    ).withLocation('à la montagne')
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!')
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const FaceSnap = this.getFaceSnapById(faceSnapId)
    FaceSnap.snap(snapType);
  }
}
