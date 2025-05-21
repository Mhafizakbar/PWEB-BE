--- latihan pertemuan ke2 tgl 26 februari 2025

/* mencari luas lingkaran
DECLARE
	c_phi number :=3.14;
	v_jari	number :=10;

        Luas number;
BEGIN
   	 Luas := c_phi * v_jari * v_jari;
	 DBMS_OUTPUT.PUT_LINE ('Konstanta Phi = '||c_phi);
         DBMS_OUTPUT.PUT_LINE ('Jari-Jari Lingkaran = '||v_jari);
	 DBMS_OUTPUT.PUT_LINE ('Maka Luas Lingkaran adalah '||Luas);
	v_jari := 20;
         Luas := c_phi * v_jari * v_jari;
         DBMS_OUTPUT.PUT_LINE ('Konstanta Phi = '||c_phi);
         DBMS_OUTPUT.PUT_LINE ('Jari-Jari Lingkaran = '||v_jari);
	 DBMS_OUTPUT.PUT_LINE ('Maka Luas Lingkaran adalah '||Luas);

END;
*/

--- memanggil data dosen 
Declare
  v_nim number(11);
  v_namamhs varchar2 (30);
  v_namapdi varchar2 (30);
  v_namafks varchar2 (30);
  
Begin
     	select nim, mhs.nama, pdi.nama, fks.nama into v_nim, v_namamhs, v_namapdi, v_namafks 	from mahasiswa mhs, prodi pdi, fakultas fks 
	where mhs.prodi = pdi.kode and pdi.kodefak = fks.kode
	and mhs.nama ='FAKHRI';

 	DBMS_OUTPUT.PUT_LINE ('Nim = '||v_nim);
	DBMS_OUTPUT.PUT_LINE ('Nama Mahasiswa = '||v_namamhs);
	DBMS_OUTPUT.PUT_LINE ('Nama Prodi = '||v_namapdi);
	DBMS_OUTPUT.PUT_LINE ('Nama Fakultas = '||v_namafks);
 ---       DBMS_OUTPUT.PUT_LINE ('Nama Dosen = '||v_nama);
End;
   