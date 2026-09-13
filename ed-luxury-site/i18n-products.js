(()=>{const lang=window.EDL_LANG;if(lang!=='en'&&lang!=='ko')return;const p=location.pathname.split('/').pop()||'';const EN_COMMON={'Disponible':'Available','Demander cette pièce':'Enquire about this piece','← Retour à la sélection':'← Back to the selection','Modèle':'Model','Cuir':'Leather','Couleur':'Colour','Métal':'Hardware','Année':'Year','Stamp':'Stamp','État':'Condition','Accessoires':'Accessories','Dimensions':'Dimensions','Très bon état':'Very good condition','Bon état':'Good condition','Doré':'Gold-tone','Argenté':'Silver-tone','Argentée':'Silver-tone','Métallerie argentée':'Silver-tone hardware','Cuir noir':'Black leather','Rouge':'Red','Noir':'Black','Rose':'Pink','Vert Menthe':'Mint Green','Bleu Jean':'Blue Jean','Carré J':'Square J','Carré L':'Square L','Carré I':'Square I','Carré P':'Square P','Carré Q':'Square Q','Cercle Y':'Circle Y'},KO_COMMON={'Disponible':'구매 가능','Demander cette pièce':'이 제품 문의하기','← Retour à la sélection':'← 셀렉션으로 돌아가기','Modèle':'모델','Cuir':'가죽','Couleur':'색상','Métal':'하드웨어','Année':'제작 연도','Stamp':'각인','État':'상태','Accessoires':'구성품','Dimensions':'사이즈','Très bon état':'매우 좋은 상태','Bon état':'좋은 상태','Doré':'골드','Argenté':'실버','Argentée':'실버','Métallerie argentée':'실버 하드웨어','Palladium':'팔라듐','Cuir noir':'블랙 레더','Rouge':'레드','Noir':'블랙','Rose':'핑크','Vert Menthe':'민트 그린','Bleu Jean':'블루 진','Carré J':'J 스퀘어','Carré L':'L 스퀘어','Carré I':'I 스퀘어','Carré P':'P 스퀘어','Carré Q':'Q 스퀘어','Cercle Y':'Y 서클'};const EN={
'birkin-35-rouge.html':{title:'Hermès Birkin 35 Red — ED Luxury',desc:'Hermès Birkin 35 in red Swift leather with palladium hardware, 2006 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box',dict:{'Swift · Rouge · Palladium':'Swift · Red · Palladium','Très bon état. Intérieur en chèvre ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'Very good condition. Tonal goatskin interior with zip pocket and slip pocket. Supplied with clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box.'}},
'birkin-35-orange.html':{title:'Hermès Birkin 35 Orange — ED Luxury',desc:'Hermès Birkin 35 in orange Togo leather with palladium hardware, 2008 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box',dict:{'Togo · Orange · Palladium':'Togo · Orange · Palladium','Très bon état. Intérieur en cuir orange ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'Very good condition. Tonal orange leather interior with zip pocket and slip pocket. Supplied with clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box.'}},
'birkin-35-noir.html':{title:'Hermès Birkin 35 Black — ED Luxury',desc:'Hermès Birkin 35 in black leather with gold-tone hardware, 1995 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box',dict:{'Cuir noir · Noir · Doré':'Black leather · Black · Gold-tone','Bon état. Intérieur en cuir noir avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'Good condition. Black leather interior with zip pocket and slip pocket. Supplied with clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box.'}},
'birkin-30-bleu-jean.html':{title:'Hermès Birkin 30 Blue Jean — ED Luxury',desc:'Hermès Birkin 30 in Blue Jean Togo leather with palladium hardware, 2005 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box',dict:{'Togo · Bleu Jean · Palladium':'Togo · Blue Jean · Palladium','Très bon état. Intérieur en cuir bleu ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'Very good condition. Tonal blue leather interior with zip pocket and slip pocket. Supplied with clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box.'}},
'birkin-35-rose.html':{title:'Hermès Birkin 35 Pink — ED Luxury',desc:'Hermès Birkin 35 in pink Epsom leather with silver-tone hardware, 2013 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, original Hermès box, 2 dust bags, rain cover and booklet',dict:{'Epsom · Rose · Métallerie argentée':'Epsom · Pink · Silver-tone hardware','Très bon état. Extérieur proche du neuf, avec quelques légères micro-rayures sur la métallerie et une petite marque sur le fermoir. Intérieur proche du neuf. Livré avec clochette, cadenas, 2 clés, boîte Hermès d’origine, 2 dust bags, housse de pluie et livret.':'Very good condition. Exterior close to new, with a few light micro-scratches on the hardware and a small mark on the clasp. Interior close to new. Supplied with clochette, padlock, 2 keys, original Hermès box, 2 dust bags, rain cover and booklet.'}},
'birkin-35-vert-menthe.html':{title:'Hermès Birkin 35 Mint Green — ED Luxury',desc:'Hermès Birkin 35 in Mint Green Clémence leather with palladium hardware, 2012 — ED Luxury.',accessories:'Clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box',dict:{'Clémence · Vert Menthe · Palladium':'Clémence · Mint Green · Palladium','Très bon état. Intérieur en cuir ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'Very good condition. Tonal leather interior with zip pocket and slip pocket. Supplied with clochette, padlock, 2 keys, leather key holder, Hermès dust bag and box.'}}
};const KO={
'birkin-35-rouge.html':{title:'Hermès Birkin 35 레드 — ED Luxury',desc:'2006년 제작, 레드 Swift 가죽과 팔라듐 하드웨어의 Hermès Birkin 35 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스',dict:{'Swift · Rouge · Palladium':'Swift · 레드 · 팔라듐','Très bon état. Intérieur en chèvre ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'매우 좋은 상태입니다. 내부는 동일 톤의 셰브르 가죽으로 마감되어 있으며 지퍼 포켓과 오픈 포켓이 있습니다. 클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스가 포함됩니다.'}},
'birkin-35-orange.html':{title:'Hermès Birkin 35 오렌지 — ED Luxury',desc:'2008년 제작, 오렌지 Togo 가죽과 팔라듐 하드웨어의 Hermès Birkin 35 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스',dict:{'Togo · Orange · Palladium':'Togo · 오렌지 · 팔라듐','Très bon état. Intérieur en cuir orange ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'매우 좋은 상태입니다. 내부는 동일 톤의 오렌지 가죽으로 마감되어 있으며 지퍼 포켓과 오픈 포켓이 있습니다. 클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스가 포함됩니다.'}},
'birkin-35-noir.html':{title:'Hermès Birkin 35 블랙 — ED Luxury',desc:'1995년 제작, 블랙 가죽과 골드 하드웨어의 Hermès Birkin 35 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스',dict:{'Cuir noir · Noir · Doré':'블랙 레더 · 블랙 · 골드','Bon état. Intérieur en cuir noir avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'좋은 상태입니다. 내부는 블랙 가죽으로 마감되어 있으며 지퍼 포켓과 오픈 포켓이 있습니다. 클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스가 포함됩니다.'}},
'birkin-30-bleu-jean.html':{title:'Hermès Birkin 30 블루 진 — ED Luxury',desc:'2005년 제작, 블루 진 Togo 가죽과 팔라듐 하드웨어의 Hermès Birkin 30 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스',dict:{'Togo · Bleu Jean · Palladium':'Togo · 블루 진 · 팔라듐','Très bon état. Intérieur en cuir bleu ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'매우 좋은 상태입니다. 내부는 동일 톤의 블루 가죽으로 마감되어 있으며 지퍼 포켓과 오픈 포켓이 있습니다. 클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스가 포함됩니다.'}},
'birkin-35-rose.html':{title:'Hermès Birkin 35 핑크 — ED Luxury',desc:'2013년 제작, 핑크 Epsom 가죽과 실버 하드웨어의 Hermès Birkin 35 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, Hermès 오리지널 박스, 더스트백 2개, 레인 커버 및 북릿',dict:{'Epsom · Rose · Métallerie argentée':'Epsom · 핑크 · 실버 하드웨어','Très bon état. Extérieur proche du neuf, avec quelques légères micro-rayures sur la métallerie et une petite marque sur le fermoir. Intérieur proche du neuf. Livré avec clochette, cadenas, 2 clés, boîte Hermès d’origine, 2 dust bags, housse de pluie et livret.':'매우 좋은 상태입니다. 외부는 새 제품에 가까우며 하드웨어에 미세한 생활 스크래치와 잠금장치에 작은 눌림 자국이 있습니다. 내부 역시 새 제품에 가까운 상태입니다. 클로셰트, 자물쇠, 키 2개, Hermès 오리지널 박스, 더스트백 2개, 레인 커버 및 북릿이 포함됩니다.'}},
'birkin-35-vert-menthe.html':{title:'Hermès Birkin 35 민트 그린 — ED Luxury',desc:'2012년 제작, 민트 그린 Clémence 가죽과 팔라듐 하드웨어의 Hermès Birkin 35 — ED Luxury.',accessories:'클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스',dict:{'Clémence · Vert Menthe · Palladium':'Clémence · 민트 그린 · 팔라듐','Très bon état. Intérieur en cuir ton sur ton avec poche zippée et poche plaquée. Livré avec clochette, cadenas, 2 clés, tirette, dust bag et boîte Hermès.':'매우 좋은 상태입니다. 내부는 동일 톤의 가죽으로 마감되어 있으며 지퍼 포켓과 오픈 포켓이 있습니다. 클로셰트, 자물쇠, 키 2개, 키 홀더, Hermès 더스트백 및 박스가 포함됩니다.'}}
};const cfg=(lang==='ko'?KO:EN)[p];if(!cfg)return;document.title=cfg.title;const m=document.querySelector('meta[name="description"]');if(m)m.setAttribute('content',cfg.desc);window.EDL_TRANSLATE?.({...((lang==='ko')?KO_COMMON:EN_COMMON),...cfg.dict});document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(!dt||!dd)return;const label=dt.textContent.trim();if(['Accessoires','Accessories','구성품'].includes(label)){dt.textContent=lang==='ko'?'구성품':'Accessories';dd.textContent=cfg.accessories}});const status=document.querySelector('.product-detail-status');if(status)status.textContent=lang==='ko'?'구매 가능':'Available';const enquire=document.querySelector('.product-detail-actions .button');if(enquire)enquire.textContent=lang==='ko'?'이 제품 문의하기':'Enquire about this piece';const back=document.querySelector('.product-back');if(back)back.textContent=lang==='ko'?'← 셀렉션으로 돌아가기':'← Back to the selection';})();
(()=>{
  if(EDL_LANG!=='es')return;
  const p=location.pathname.split('/').pop()||'';
  const standardAccessories='Clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès';
  const products={
    'birkin-35-rouge.html':{
      title:'Hermès Birkin 35 rojo — ED Luxury',
      meta:'Hermès Birkin 35 de 2006 en cuero Swift rojo con herrajes de paladio — ED Luxury.',
      sub:'Swift · Rojo · Paladio',
      description:'Muy buen estado. Interior de piel de cabra a tono con bolsillo con cremallera y bolsillo abierto. Se entrega con clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès.',
      accessories:standardAccessories
    },
    'birkin-35-orange.html':{
      title:'Hermès Birkin 35 naranja — ED Luxury',
      meta:'Hermès Birkin 35 de 2008 en cuero Togo naranja con herrajes de paladio — ED Luxury.',
      sub:'Togo · Naranja · Paladio',
      description:'Muy buen estado. Interior de cuero naranja a tono con bolsillo con cremallera y bolsillo abierto. Se entrega con clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès.',
      accessories:standardAccessories
    },
    'birkin-35-noir.html':{
      title:'Hermès Birkin 35 negro — ED Luxury',
      meta:'Hermès Birkin 35 de 1995 en cuero negro con herrajes dorados — ED Luxury.',
      sub:'Cuero negro · Negro · Dorado',
      description:'Buen estado. Interior de cuero negro con bolsillo con cremallera y bolsillo abierto. Se entrega con clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès.',
      accessories:standardAccessories
    },
    'birkin-30-bleu-jean.html':{
      title:'Hermès Birkin 30 Azul Jean — ED Luxury',
      meta:'Hermès Birkin 30 de 2005 en cuero Togo Azul Jean con herrajes de paladio — ED Luxury.',
      sub:'Togo · Azul Jean · Paladio',
      description:'Muy buen estado. Interior de cuero azul a tono con bolsillo con cremallera y bolsillo abierto. Se entrega con clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès.',
      accessories:standardAccessories
    },
    'birkin-35-rose.html':{
      title:'Hermès Birkin 35 rosa — ED Luxury',
      meta:'Hermès Birkin 35 de 2013 en cuero Epsom rosa con herrajes plateados — ED Luxury.',
      sub:'Epsom · Rosa · Herrajes plateados',
      description:'Muy buen estado. Exterior casi nuevo, con ligeros microarañazos en los herrajes y una pequeña marca en el cierre. Interior casi nuevo. Se entrega con clochette, candado, 2 llaves, caja Hermès original, 2 fundas guardapolvo, funda para la lluvia y folleto.',
      accessories:'Clochette, candado, 2 llaves, caja Hermès original, 2 fundas guardapolvo, funda para la lluvia y folleto'
    },
    'birkin-35-vert-menthe.html':{
      title:'Hermès Birkin 35 Verde Menta — ED Luxury',
      meta:'Hermès Birkin 35 de 2012 en cuero Clémence Verde Menta con herrajes de paladio — ED Luxury.',
      sub:'Clémence · Verde Menta · Paladio',
      description:'Muy buen estado. Interior de cuero a tono con bolsillo con cremallera y bolsillo abierto. Se entrega con clochette, candado, 2 llaves, tira de cuero para las llaves, funda guardapolvo y caja Hermès.',
      accessories:standardAccessories
    }
  };
  const item=products[p];if(!item)return;
  document.title=item.title;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=item.meta;
  EDL_TRANSLATE({
    'Disponible':'Disponible','Demander cette pièce':'Consultar por esta pieza','← Retour à la sélection':'← Volver a la selección',
    'Modèle':'Modelo','Cuir':'Cuero','Couleur':'Color','Métal':'Herrajes','Année':'Año','Stamp':'Sello','État':'Estado','Accessoires':'Accesorios','Dimensions':'Dimensiones',
    'Très bon état':'Muy buen estado','Bon état':'Buen estado','Doré':'Dorado','Argenté':'Plateado','Argentée':'Plateada','Métallerie argentée':'Herrajes plateados','Palladium':'Paladio',
    'Cuir noir':'Cuero negro','Rouge':'Rojo','Orange':'Naranja','Noir':'Negro','Rose':'Rosa','Vert Menthe':'Verde Menta','Bleu Jean':'Azul Jean',
    'Carré J':'Cuadrado J','Carré L':'Cuadrado L','Carré I':'Cuadrado I','Carré P':'Cuadrado P','Carré Q':'Cuadrado Q','Cercle Y':'Círculo Y'
  });
  const sub=document.querySelector('.product-detail-sub');if(sub)sub.textContent=item.sub;
  const description=document.querySelector('.product-detail-description');if(description)description.textContent=item.description;
  document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(dt?.textContent.trim()==='Accesorios'&&dd)dd.textContent=item.accessories});
  const altReplacements=[
    ['Vert Menthe','Verde Menta'],['Bleu Jean','Azul Jean'],['Rouge','Rojo'],['Orange','Naranja'],['Noir','Negro'],['Rose','Rosa'],
    ['seconde vue de face','segunda vista frontal'],['vue côté gauche','vista lateral izquierda'],['vue côté droit','vista lateral derecha'],
    ['vue de face','vista frontal'],['vue de côté','vista lateral'],['vue arrière','vista posterior'],['vue dessous','vista inferior'],
    ['vue principale','vista principal'],['détail de la métallerie','detalle de los herrajes'],['détail angle','detalle de la esquina'],
    ['intérieur','interior'],['accessoires','accesorios'],['boîte','caja']
  ];
  document.querySelectorAll('.product-gallery img').forEach(img=>{let alt=img.getAttribute('alt')||'';for(const [from,to] of altReplacements)alt=alt.replace(from,to);img.setAttribute('alt',alt)});
})();
