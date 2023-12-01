import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-inventori',
  templateUrl: './inventori.page.html',
  styleUrls: ['./inventori.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InventoriPage implements OnInit {

  dataInventori: any=[];
  modal_tambah = false;
  id: any;
  nama: any;
  jumlah: any;

  constructor(public _apiService: ApiService, private modal:ModalController) { }

  ngOnInit() {
    this.getInventori();
  }

  getInventori() {
    this._apiService.tampil('tampilInventori.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.dataInventori = res;
      },
      error: (err: any) => {
        console.log(err);
      },
    })
  }

  reset_model() {
    this.id = null;
    this.nama = '';
    this.jumlah = '';
    }
  modal_edit = false;
  open_modal_tambah(isOpen: boolean) {
    this.modal_tambah = isOpen;
    this.reset_model();
    this.modal_tambah = true;
    this.modal_edit = false;
    }
  open_modal_edit(isOpen: boolean, idget: any) {
    this.modal_edit = isOpen;
    this.id = idget;
    console.log(this.id);
    this.ambilInventori(this.id);
    this.modal_tambah = false;
    this.modal_edit = true;
  } 
  cancel() {
    this.modal.dismiss();
    this.modal_tambah = false;
    this.reset_model();
  }

  tambahInventori() {
      if (this.nama != '' && this.jumlah != '') {
      let data = {
      nama: this.nama,
      jumlah: this.jumlah,
      }
      this._apiService.tambah(data, '/tambahInventori.php')
      .subscribe({
      next: (hasil: any) => {
      this.reset_model();
      console.log('berhasil tambah Inventori');
      this.getInventori();
      this.modal_tambah = true;
      this.modal.dismiss();
      },
      error: (err: any) => {
      console.log('gagal tambah Inventori');
      }
      })
      } else {
      console.log('gagal tambah Inventori karena masih ada data yg kosong');
      }}

  hapusInventori(id: any) {
        this._apiService.hapus(id,
        '/hapusInventori.php?id=').subscribe({
        next: (res: any) => {
        console.log('sukses', res);
        this.getInventori();
        console.log('berhasil hapus data');
        },
        error: (error: any) => {
        console.log('gagal');
        }
        })
        }

  ambilInventori(id: any) {
    this._apiService.lihat(id,'/lihatInventori.php?id=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let Inventori = hasil;
        this.id = Inventori.id;
        this.nama = Inventori.nama;
        this.jumlah = Inventori.jumlah;
      },
      error: (error: any) => {
        console.log('gagal ambil data');
      }
    })
  }
  
  editInventori() {
    let data = {
    id: this.id,
    nama: this.nama,
    jumlah: this.jumlah
    }
    this._apiService.edit(data, '/editInventori.php')
    .subscribe({
    next: (hasil: any) => {
    console.log(hasil);
    this.reset_model();
    this.getInventori();
    console.log('berhasil edit Inventori');
    this.modal_edit = false;
    this.modal.dismiss();
    },
    error: (err: any) => {
    console.log('gagal edit Inventori');
    }
    })
    }
}
