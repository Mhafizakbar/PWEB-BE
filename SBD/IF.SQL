DECLARE
v_dosen varchar2(30);
v_nim VARCHAR2(11);
v_namamhs VARCHAR2(30);
v_kodemk VARCHAR2(30);
v_namamk VARCHAR2(30);
v_sks NUMBER(4);
v_nilai VARCHAR2(5);
v_bobot NUMBER(3,2);
v_prodi VARCHAR2(25);
v_semester NUMBER(1);
BEGIN
SELECT mhs.nim ,mhs.nama , mk.kode,mk.nama,mk.sks,krs.nilai ,dsn.nama,pdi.nama,krs.semester
INTO v_nim , v_namamhs, v_kodemk , v_namamk, v_sks,v_nilai , v_dosen, v_prodi,v_semester
FROM mahasiswa mhs , matakuliah mk , krs , jadwal jwl , dosen dsn, prodi pdi
where mhs.nim = krs.nim
and pdi.kode = mhs.prodi
and krs.kodemk = mk.kode
and mk.kode = jwl.kodemk
and jwl.nip = dsn.nip
and mhs.nim = '12350114518'
and mk.kode = 'PIF221120'
and dsn.nama = 'PIZAINI, S.T., M.Kom.'
and krs.semester = 1;
IF v_nilai = 'A' then
v_bobot := 4;
ELSIF v_nilai = 'A-' then
v_bobot := 3.6;
ELSIF v_nilai = 'B+' then
v_bobot := 3.4;
ELSIF v_nilai = 'B-' then
v_bobot := 3;
ELSIF v_nilai = 'B' then
v_bobot := 2.8;
ELSIF v_nilai = 'C+' then
v_bobot := 2.5;
ELSIF v_nilai = 'C' then
v_bobot := 2;
ELSIF v_nilai = 'C-' then
v_bobot := 1;
ELSIF v_nilai = 'D' then
v_bobot := 0;
ELSIF v_nilai = 'E' then

v_bobot := 1;
END IF;
DBMS_OUTPUT.PUT_LINE ('NAMA ANDA : ' || v_namamhs);
DBMS_OUTPUT.PUT_LINE ('NIM ANDA : ' || v_nim);
DBMS_OUTPUT.PUT_LINE ('MATAKULIAH ANDA : ' || v_namamk);
DBMS_OUTPUT.PUT_LINE ('SKS ANDA : ' || v_sks);
DBMS_OUTPUT.PUT_LINE ('NAMA DOSEN : ' || v_dosen);
DBMS_OUTPUT.PUT_LINE ('NILAI ANDA : ' || v_nilai);
DBMS_OUTPUT.PUT_LINE ('BOBOT ANDA : ' || v_bobot);
DBMS_OUTPUT.PUT_LINE ('PRODI ANDA : ' || v_prodi);
DBMS_OUTPUT.PUT_LINE ('SEMESTER ANDA : ' || v_semester);
END;
/