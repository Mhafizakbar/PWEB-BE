DECLARE
	v_matematika number :=35;
	v_bahasainggris number :=15;
    v_bahasaindonesia number :=15;
    v_agama number :=15;
    v_wawancara number :=15;
    v_nilai number(15);
    v_status varchar2(15);
        Nilai number;
BEGIN
   	 Nilai := v_matematika + v_bahasainggris + v_bahasaindonesia + v_agama + v_wawancara;
	 DBMS_OUTPUT.PUT_LINE ('Nilai matematika = '||v_matematika);
         DBMS_OUTPUT.PUT_LINE ('Nilai bahasa inggris = '||v_bahasainggris);
	 DBMS_OUTPUT.PUT_LINE ('Nilai bahasa indonesia = '||v_bahasaindonesia);
     DBMS_OUTPUT.PUT_LINE ('Nilai agama = '||v_agama);
     DBMS_OUTPUT.PUT_LINE ('Nilai wawancara = '||v_wawancara);
     DBMS_OUTPUT.PUT_LINE ('Maka Nilai Akhir adalah '||Nilai);
END;