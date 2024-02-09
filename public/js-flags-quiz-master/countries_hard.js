const countries = [
  {
    flag: "flags/ad.svg",
    name: "Andorra",
  },
  {
    flag: "flags/ao.svg",
    name: "Angola",
  },

  {
    flag: "flags/aq.svg",
    name: "Antarktika",
  },

  {
    flag: "flags/bs.svg",
    name: "Bahamalar",
  },
  {
    flag: "flags/bh.svg",
    name: "Bahreyn",
  },

  {
    flag: "flags/bb.svg",
    name: "Barbados",
  },
  {
    flag: "flags/by.svg",
    name: "Belarus",
  },

  {
    flag: "flags/bz.svg",
    name: "Belize",
  },
  {
    flag: "flags/bj.svg",
    name: "Benin",
  },
  {
    flag: "flags/bm.svg",
    name: "Bermuda",
  },

  {
    flag: "flags/bt.svg",
    name: "Butan",
  },
  {
    flag: "flags/bo.svg",
    name: "Bolivya",
  },

  {
    flag: "flags/bw.svg",
    name: "Botsvana",
  },

  {
    flag: "flags/bf.svg",
    name: "Burkina Faso",
  },
  {
    flag: "flags/bi.svg",
    name: "Burundi",
  },
  {
    flag: "flags/kh.svg",
    name: "Kamboçya",
  },
  {
    flag: "flags/cm.svg",
    name: "Kamerun",
  },

  {
    flag: "flags/cg.svg",
    name: "Kongo Cumhuriyeti",
  },
  {
    flag: "flags/cd.svg",
    name: "Kongo Demokratik Cumhuriyeti",
  },

  {
    flag: "flags/cr.svg",
    name: "Kosta Rika",
  },

  {
    flag: "flags/dj.svg",
    name: "Cibuti",
  },
  {
    flag: "flags/dm.svg",
    name: "Dominika",
  },
  {
    flag: "flags/do.svg",
    name: "Dominik Cumhuriyeti",
  },
  {
    flag: "flags/ec.svg",
    name: "Ekvator Cumhuriyeti",
  },

  {
    flag: "flags/sv.svg",
    name: "El Salvador",
  },
  {
    flag: "flags/gq.svg",
    name: "Ekvator Ginesi",
  },
  {
    flag: "flags/er.svg",
    name: "Eritre",
  },

  {
    flag: "flags/et.svg",
    name: "Etiyopya",
  },
  {
    flag: "flags/fj.svg",
    name: "Fiji Cumhuriyeti",
  },

  {
    flag: "flags/ga.svg",
    name: "Gabon",
  },
  {
    flag: "flags/gm.svg",
    name: "Gambiya",
  },

  {
    flag: "flags/gh.svg",
    name: "Gana",
  },
  {
    flag: "flags/gi.svg",
    name: "Cebelitarık",
  },

  {
    flag: "flags/gl.svg",
    name: "Grönland",
  },
  {
    flag: "flags/gd.svg",
    name: "Grenada",
  },

  {
    flag: "flags/gt.svg",
    name: "Guatemala",
  },

  {
    flag: "flags/gn.svg",
    name: "Gine",
  },

  {
    flag: "flags/gy.svg",
    name: "Guyana",
  },
  {
    flag: "flags/ht.svg",
    name: "Haiti",
  },

  {
    flag: "flags/va.svg",
    name: "Vatikan",
  },
  {
    flag: "flags/hn.svg",
    name: "Honduras",
  },
  {
    flag: "flags/hk.svg",
    name: "Hong Kong",
  },

  {
    flag: "flags/ci.svg",
    name: "Fildişi Sahili",
  },

  {
    flag: "flags/la.svg",
    name: "Laos",
  },

  {
    flag: "flags/ls.svg",
    name: "Lesotho",
  },
  {
    flag: "flags/lr.svg",
    name: "Liberya",
  },

  {
    flag: "flags/li.svg",
    name: "Lihtenştayn",
  },

  {
    flag: "flags/mo.svg",
    name: "Makao",
  },

  {
    flag: "flags/mg.svg",
    name: "Madagaskar",
  },
  {
    flag: "flags/mw.svg",
    name: "Malavi",
  },

  {
    flag: "flags/mv.svg",
    name: "Maldivler",
  },

  {
    flag: "flags/mt.svg",
    name: "Malta",
  },

  {
    flag: "flags/mc.svg",
    name: "Monako",
  },

  {
    flag: "flags/mz.svg",
    name: "Mozambik",
  },
  {
    flag: "flags/mm.svg",
    name: "Myanmar",
  },
  {
    flag: "flags/na.svg",
    name: "Namibya",
  },

  {
    flag: "flags/ni.svg",
    name: "Nikaragua",
  },

  {
    flag: "flags/ng.svg",
    name: "Nijerya Federal Cumhuriyeti",
  },

  {
    flag: "flags/om.svg",
    name: "Umman",
  },

  {
    flag: "flags/pa.svg",
    name: "Panama",
  },
  {
    flag: "flags/pg.svg",
    name: "Papua Yeni Gine",
  },
  {
    flag: "flags/py.svg",
    name: "Paraguay",
  },

  {
    flag: "flags/ph.svg",
    name: "Filipinler",
  },

  {
    flag: "flags/pr.svg",
    name: "Porto Riko",
  },

  {
    flag: "flags/xk.svg",
    name: "Kosova",
  },

  {
    flag: "flags/rw.svg",
    name: "Ruanda",
  },

  {
    flag: "flags/sm.svg",
    name: "San Marino",
  },

  {
    flag: "flags/sl.svg",
    name: "Sierra Leone",
  },

  {
    flag: "flags/so.svg",
    name: "Somali",
  },

  {
    flag: "flags/ss.svg",
    name: "Güney Sudan",
  },

  {
    flag: "flags/lk.svg",
    name: "Sri Lanka",
  },

  {
    flag: "flags/sr.svg",
    name: "Surinam",
  },

  {
    flag: "flags/sz.svg",
    name: "Esvatini Krallığı",
  },

  {
    flag: "flags/tw.svg",
    name: "Tayvan",
  },

  {
    flag: "flags/tz.svg",
    name: "Tanzanya",
  },

  {
    flag: "flags/tg.svg",
    name: "Togo",
  },

  {
    flag: "flags/to.svg",
    name: "Tonga Krallığı",
  },
  {
    flag: "flags/tt.svg",
    name: "Trinidad ve Tobago",
  },

  {
    flag: "flags/ug.svg",
    name: "Uganda",
  },

  {
    flag: "flags/uy.svg",
    name: "Uruguay",
  },

  {
    flag: "flags/ve.svg",
    name: "Venezuela",
  },
  {
    flag: "flags/vn.svg",
    name: "Vietnam",
  },
  {
    flag: "flags/eh.svg",
    name: "Batı Sahra",
  },

  {
    flag: "flags/zm.svg",
    name: "Zambiya",
  },
  {
    flag: "flags/zw.svg",
    name: "Zimbabve",
  },
];
