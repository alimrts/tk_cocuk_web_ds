const countries = [
  {
    flag: "flags/af.svg",
    name: "Afganistan",
  },

  {
    flag: "flags/al.svg",
    name: "Arnavutluk",
  },
  {
    flag: "flags/dz.svg",
    name: "Cezayir",
  },

  {
    flag: "flags/ar.svg",
    name: "Arjantin",
  },
  {
    flag: "flags/am.svg",
    name: "Ermenistan",
  },

  {
    flag: "flags/au.svg",
    name: "Avustralya",
  },
  {
    flag: "flags/at.svg",
    name: "Avusturya",
  },
  {
    flag: "flags/az.svg",
    name: "Azerbaycan",
  },

  {
    flag: "flags/bd.svg",
    name: "Bangladeş",
  },

  {
    flag: "flags/by.svg",
    name: "Belarus",
  },
  {
    flag: "flags/be.svg",
    name: "Belçika",
  },

  {
    flag: "flags/ba.svg",
    name: "Bosna-Hersek",
  },

  {
    flag: "flags/br.svg",
    name: "Brezilya",
  },

  {
    flag: "flags/bg.svg",
    name: "Bulgaristan",
  },

  {
    flag: "flags/ca.svg",
    name: "Kanada",
  },

  {
    flag: "flags/cf.svg",
    name: "Orta Afrika Cumhuriyeti",
  },
  {
    flag: "flags/td.svg",
    name: "Çad Cumhuriyeti",
  },
  {
    flag: "flags/cl.svg",
    name: "Şili",
  },
  {
    flag: "flags/cn.svg",
    name: "Çin Halk Cumhuriyeti",
  },

  {
    flag: "flags/co.svg",
    name: "Kolombiya",
  },

  {
    flag: "flags/hr.svg",
    name: "Hırvatistan",
  },
  {
    flag: "flags/cu.svg",
    name: "Küba",
  },

  {
    flag: "flags/cy.svg",
    name: "Kuzey Kıbrıs Türk Cumhuriyeti",
  },
  {
    flag: "flags/cz.svg",
    name: "Çek Cumhuriyeti",
  },
  {
    flag: "flags/dk.svg",
    name: "Danimarka",
  },

  {
    flag: "flags/eg.svg",
    name: "Mısır",
  },

  {
    flag: "flags/ee.svg",
    name: "Estonya",
  },

  {
    flag: "flags/fi.svg",
    name: "Finlandiya",
  },
  {
    flag: "flags/fr.svg",
    name: "Fransa",
  },

  {
    flag: "flags/ge.svg",
    name: "Gürcistan",
  },
  {
    flag: "flags/de.svg",
    name: "Almanya",
  },

  {
    flag: "flags/gr.svg",
    name: "Yunanistan",
  },

  {
    flag: "flags/hu.svg",
    name: "Macaristan",
  },
  {
    flag: "flags/is.svg",
    name: "İzlanda",
  },
  {
    flag: "flags/in.svg",
    name: "Hindistan",
  },
  {
    flag: "flags/id.svg",
    name: "Endonezya",
  },

  {
    flag: "flags/ir.svg",
    name: "İran",
  },
  {
    flag: "flags/iq.svg",
    name: "Irak",
  },
  {
    flag: "flags/ie.svg",
    name: "İrlanda",
  },

  {
    flag: "flags/it.svg",
    name: "İtalya",
  },
  {
    flag: "flags/jm.svg",
    name: "Jamaika",
  },
  {
    flag: "flags/jp.svg",
    name: "Japonya",
  },

  {
    flag: "flags/jo.svg",
    name: "Ürdün",
  },
  {
    flag: "flags/kz.svg",
    name: "Kazakistan",
  },
  {
    flag: "flags/ke.svg",
    name: "Kenya",
  },

  {
    flag: "flags/kw.svg",
    name: "Kuveyt",
  },
  {
    flag: "flags/kg.svg",
    name: "Kırgızistan",
  },

  {
    flag: "flags/lv.svg",
    name: "Letonya",
  },
  {
    flag: "flags/lb.svg",
    name: "Lübnan",
  },

  {
    flag: "flags/ly.svg",
    name: "Libya",
  },

  {
    flag: "flags/lt.svg",
    name: "Litvanya",
  },
  {
    flag: "flags/lu.svg",
    name: "Lüksemburg",
  },

  {
    flag: "flags/mk.svg",
    name: "Kuzey Makedonya",
  },

  {
    flag: "flags/my.svg",
    name: "Malezya",
  },

  {
    flag: "flags/ml.svg",
    name: "Mali",
  },

  {
    flag: "flags/mr.svg",
    name: "Moritanya",
  },

  {
    flag: "flags/mx.svg",
    name: "Meksika",
  },

  {
    flag: "flags/md.svg",
    name: "Moldova",
  },

  {
    flag: "flags/mn.svg",
    name: "Moğolistan",
  },

  {
    flag: "flags/me.svg",
    name: "Karadağ",
  },

  {
    flag: "flags/ma.svg",
    name: "Fas",
  },

  {
    flag: "flags/np.svg",
    name: "Nepal",
  },
  {
    flag: "flags/nl.svg",
    name: "Hollanda",
  },
  {
    flag: "flags/nz.svg",
    name: "Yeni Zelanda",
  },

  {
    flag: "flags/ne.svg",
    name: "Nijer",
  },

  {
    flag: "flags/kp.svg",
    name: "Kuzey Kore",
  },

  {
    flag: "flags/no.svg",
    name: "Norveç",
  },

  {
    flag: "flags/pk.svg",
    name: "Pakistan",
  },

  {
    flag: "flags/ps.svg",
    name: "Filistin",
  },

  {
    flag: "flags/pe.svg",
    name: "Peru",
  },

  {
    flag: "flags/pl.svg",
    name: "Polonya",
  },
  {
    flag: "flags/pt.svg",
    name: "Portekiz",
  },

  {
    flag: "flags/qa.svg",
    name: "Katar",
  },

  {
    flag: "flags/ro.svg",
    name: "Romanya",
  },
  {
    flag: "flags/ru.svg",
    name: "Rusya Federasyonu",
  },

  {
    flag: "flags/sa.svg",
    name: "Suudi Arabistan",
  },

  {
    flag: "flags/sn.svg",
    name: "Senegal",
  },
  {
    flag: "flags/rs.svg",
    name: "Sırbistan",
  },

  {
    flag: "flags/sg.svg",
    name: "Singapur",
  },

  {
    flag: "flags/sk.svg",
    name: "Slovakya",
  },
  {
    flag: "flags/si.svg",
    name: "Slovenya",
  },

  {
    flag: "flags/za.svg",
    name: "Güney Afrika",
  },

  {
    flag: "flags/kr.svg",
    name: "Güney Kore",
  },

  {
    flag: "flags/es.svg",
    name: "İspanya",
  },

  {
    flag: "flags/sd.svg",
    name: "Sudan",
  },

  {
    flag: "flags/se.svg",
    name: "İsveç",
  },
  {
    flag: "flags/ch.svg",
    name: "İsviçre",
  },
  {
    flag: "flags/sy.svg",
    name: "Suriye",
  },

  {
    flag: "flags/tj.svg",
    name: "Tacikistan",
  },

  {
    flag: "flags/th.svg",
    name: "Tayland",
  },

  {
    flag: "flags/tn.svg",
    name: "Tunus",
  },
  {
    flag: "flags/tr.svg",
    name: "Türkiye",
  },
  {
    flag: "flags/tm.svg",
    name: "Türkmenistan",
  },

  {
    flag: "flags/ua.svg",
    name: "Ukrayna",
  },
  {
    flag: "flags/ae.svg",
    name: "Birleşik Arap Emirlikleri",
  },
  {
    flag: "flags/gb.svg",
    name: "Birleşik Krallık",
  },
  {
    flag: "flags/us.svg",
    name: "Amerika Birleşik Devletleri",
  },

  {
    flag: "flags/uz.svg",
    name: "Özbekistan",
  },

  {
    flag: "flags/ye.svg",
    name: "Yemen",
  },
];
