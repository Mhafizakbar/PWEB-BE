DECLARE
v_dosen varchar2(30);
v_nim VARCHAR2(11);
v_namamhs VARCHAR2(30);
v_kodemk VARCHAR2(30);
v_namamk VARCHAR2(30);
v_sks NUMBER(4);
v_nilai VARCHAR2(5);
v_bobot NUMBER(3,1);
v_prodi VARCHAR2(25);
BEGIN
SELECT mhs.nim ,mhs.nama , mk.kode,mk.nama,mk.sks,krs.nilai ,dsn.nama,pdi.nama
INTO v_nim , v_namamhs, v_kodemk , v_namamk, v_sks,v_nilai , v_dosen, v_prodi
FROM mahasiswa mhs , matakuliah mk , krs , jadwal jwl , dosen dsn, prodi pdi
where mhs.nim = krs.nim
and pdi.kode = mhs.prodi
and krs.kodemk = mk.kode
and mk.kode = jwl.kodemk
and jwl.nip = dsn.nip
and mhs.nim = '12350114518'
and mk.kode = 'PIF221131'
and dsn.nama = 'Febi Yanto, M. Kom.';
case v_nilai
when  'A' then v_bobot := 4;
when  'A-' then v_bobot := 3.5;
when  'B+' then v_bobot := 3.3;
when  'B' then v_bobot := 3;
when  'B-' then v_bobot := 2.7;
when  'C+' then v_bobot := 2.3;
when  'C' then v_bobot := 2;
when  'C-' then v_bobot := 1.7;
when  'D' then v_bobot := 1;
end case;
DBMS_OUTPUT.PUT_LINE ('NAMA ANDA : ' || v_namamhs);
DBMS_OUTPUT.PUT_LINE ('NIM ANDA : ' || v_nim);
DBMS_OUTPUT.PUT_LINE ('NAMA DOSEN : ' || v_dosen);
DBMS_OUTPUT.PUT_LINE ('MATAKULIAH ANDA : ' || v_namamk);
DBMS_OUTPUT.PUT_LINE ('SKS ANDA : ' || v_sks);
DBMS_OUTPUT.PUT_LINE ('NILAI ANDA : ' || v_nilai);
DBMS_OUTPUT.PUT_LINE ('BOBOT ANDA : ' || v_bobot);
DBMS_OUTPUT.PUT_LINE ('PRODI ANDA : ' || v_prodi);
END;
/