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

(()=>{
  if(EDL_LANG!=='ar')return;
  const p=location.pathname.split('/').pop()||'';
  const standardAccessories='كلوشيت، قفل، مفتاحان، حافظة مفاتيح جلدية، كيس حفظ وصندوق من هيرميس';
  const products={
    'birkin-35-rouge.html':{
      name:'حقيبة هيرميس بيركن 35 الحمراء',title:'هيرميس بيركن 35 أحمر — ED Luxury',
      meta:'حقيبة هيرميس بيركن 35 من جلد Swift الأحمر مع معدن بالاديوم، إصدار 2006 — ED Luxury.',
      sub:'أحمر · جلد Swift · بالاديوم',
      description:'بحالة جيدة جداً. الجزء الداخلي من جلد الماعز باللون نفسه، مع جيب بسحّاب وجيب مفتوح. تأتي مع كلوشيت، وقفل، ومفتاحين، وحافظة مفاتيح جلدية، وكيس حفظ وصندوق من هيرميس.',
      accessories:standardAccessories,views:['الصورة الرئيسية','الواجهة الأمامية','صورة أمامية ثانية','الجانب','الخلف']
    },
    'birkin-35-orange.html':{
      name:'حقيبة هيرميس بيركن 35 البرتقالية',title:'هيرميس بيركن 35 برتقالي — ED Luxury',
      meta:'حقيبة هيرميس بيركن 35 من جلد Togo البرتقالي مع معدن بالاديوم، إصدار 2008 — ED Luxury.',
      sub:'برتقالي · جلد Togo · بالاديوم',
      description:'بحالة جيدة جداً. الجزء الداخلي من الجلد البرتقالي باللون نفسه، مع جيب بسحّاب وجيب مفتوح. تأتي مع كلوشيت، وقفل، ومفتاحين، وحافظة مفاتيح جلدية، وكيس حفظ وصندوق من هيرميس.',
      accessories:standardAccessories,views:['الصورة الرئيسية','الجانب الأيسر','الجانب الأيمن','الخلف','القاعدة']
    },
    'birkin-35-noir.html':{
      name:'حقيبة هيرميس بيركن 35 السوداء',title:'هيرميس بيركن 35 أسود — ED Luxury',
      meta:'حقيبة هيرميس بيركن 35 من الجلد الأسود مع معدن ذهبي، إصدار 1995 — ED Luxury.',
      sub:'أسود · جلد أسود · معدن ذهبي',
      description:'بحالة جيدة. الجزء الداخلي من الجلد الأسود، مع جيب بسحّاب وجيب مفتوح. تأتي مع كلوشيت، وقفل، ومفتاحين، وحافظة مفاتيح جلدية، وكيس حفظ وصندوق من هيرميس.',
      accessories:standardAccessories,views:['الصورة الرئيسية','الجانب الأيسر','الجانب الأيمن','الخلف','تفاصيل المعدن']
    },
    'birkin-30-bleu-jean.html':{
      name:'حقيبة هيرميس بيركن 30 بلون أزرق جينز',title:'هيرميس بيركن 30 أزرق جينز — ED Luxury',
      meta:'حقيبة هيرميس بيركن 30 من جلد Togo بلون أزرق جينز مع معدن بالاديوم، إصدار 2005 — ED Luxury.',
      sub:'أزرق جينز · جلد Togo · بالاديوم',
      description:'بحالة جيدة جداً. الجزء الداخلي من الجلد الأزرق باللون نفسه، مع جيب بسحّاب وجيب مفتوح. تأتي مع كلوشيت، وقفل، ومفتاحين، وحافظة مفاتيح جلدية، وكيس حفظ وصندوق من هيرميس.',
      accessories:standardAccessories,views:['الصورة الرئيسية','الواجهة الأمامية','الجانب','الخلف','الملحقات']
    },
    'birkin-35-rose.html':{
      name:'حقيبة هيرميس بيركن 35 الوردية',title:'هيرميس بيركن 35 وردي — ED Luxury',
      meta:'حقيبة هيرميس بيركن 35 من جلد Epsom الوردي مع معدن فضي، إصدار 2013 — ED Luxury.',
      sub:'وردي · جلد Epsom · معدن فضي',
      description:'بحالة جيدة جداً. الجزء الخارجي قريب من حالة الجديد، مع خدوش دقيقة وخفيفة على المعدن وأثر صغير على الإغلاق. الجزء الداخلي قريب من حالة الجديد أيضاً. تأتي مع كلوشيت، وقفل، ومفتاحين، وصندوق هيرميس الأصلي، وكيسي حفظ، وغطاء للمطر، وكتيّب.',
      accessories:'كلوشيت، قفل، مفتاحان، صندوق هيرميس الأصلي، كيسا حفظ، غطاء للمطر، وكتيّب',views:['الصورة الرئيسية','الجانب','الخلف','تفاصيل المعدن','القاعدة']
    },
    'birkin-35-vert-menthe.html':{
      name:'حقيبة هيرميس بيركن 35 الخضراء النعناعية',title:'هيرميس بيركن 35 أخضر نعناعي — ED Luxury',
      meta:'حقيبة هيرميس بيركن 35 من جلد Clémence الأخضر النعناعي مع معدن بالاديوم، إصدار 2012 — ED Luxury.',
      sub:'أخضر نعناعي · جلد Clémence · بالاديوم',
      description:'بحالة جيدة جداً. الجزء الداخلي من الجلد باللون نفسه، مع جيب بسحّاب وجيب مفتوح. تأتي مع كلوشيت، وقفل، ومفتاحين، وحافظة مفاتيح جلدية، وكيس حفظ وصندوق من هيرميس.',
      accessories:standardAccessories,views:['الصورة الرئيسية','الواجهة الأمامية','الجانب الأيسر','الجانب الأيمن','الخلف','الجزء الداخلي','تفاصيل الزاوية','الصندوق']
    }
  };
  const item=products[p];if(!item)return;
  document.title=item.title;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=item.meta;
  EDL_TRANSLATE({
    'Disponible':'متاحة','Demander cette pièce':'استفسر عن هذه القطعة','← Retour à la sélection':'العودة إلى المجموعة المختارة',
    'Modèle':'الموديل','Cuir':'الجلد','Couleur':'اللون','Métal':'المعدن','Année':'سنة الصنع','Stamp':'الختم','État':'الحالة','Accessoires':'الملحقات','Dimensions':'الأبعاد',
    'Très bon état':'حالة جيدة جداً','Bon état':'حالة جيدة','Doré':'ذهبي','Argenté':'فضي','Argentée':'فضي','Métallerie argentée':'معدن فضي','Palladium':'بالاديوم',
    'Cuir noir':'جلد أسود','Rouge':'أحمر','Orange':'برتقالي','Noir':'أسود','Rose':'وردي','Vert Menthe':'أخضر نعناعي','Bleu Jean':'أزرق جينز',
    'Carré J':'مربع J','Carré L':'مربع L','Carré I':'مربع I','Carré P':'مربع P','Carré Q':'مربع Q','Cercle Y':'دائرة Y'
  });
  const sub=document.querySelector('.product-detail-sub');if(sub)sub.textContent=item.sub;
  const description=document.querySelector('.product-detail-description');if(description)description.textContent=item.description;
  document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(dt?.textContent.trim()==='الملحقات'&&dd)dd.textContent=item.accessories});
  document.querySelectorAll('.product-gallery img').forEach((img,index)=>{img.alt=item.name+' — '+(item.views[index]||'صورة للمنتج')});
})();

(()=>{
  if(EDL_LANG!=='ja')return;
  const p=location.pathname.split('/').pop()||'';
  const standardAccessories='クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱';
  const products={
    'birkin-35-rouge.html':{
      name:'Hermès Birkin 35 Rouge',title:'Hermès Birkin 35 Rouge — ED Luxury',
      meta:'2006年製Hermès Birkin 35。Swiftレザー、Rouge、Palladium金具。',
      description:'非常に良好な状態です。内側は同系色のシェーブルレザーで、ファスナーポケットとオープンポケットを備えています。クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱が付属します。',
      accessories:standardAccessories,views:['メイン画像','正面','正面の別アングル','側面','背面']
    },
    'birkin-35-orange.html':{
      name:'Hermès Birkin 35 Orange',title:'Hermès Birkin 35 Orange — ED Luxury',
      meta:'2008年製Hermès Birkin 35。Togoレザー、Orange、Palladium金具。',
      description:'非常に良好な状態です。内側は同系色のオレンジレザーで、ファスナーポケットとオープンポケットを備えています。クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱が付属します。',
      accessories:standardAccessories,views:['メイン画像','左側面','右側面','背面','底面']
    },
    'birkin-35-noir.html':{
      name:'Hermès Birkin 35 Noir',title:'Hermès Birkin 35 Noir — ED Luxury',
      meta:'1995年製Hermès Birkin 35。ブラックレザー、Noir、Doré金具。',
      description:'良好な状態です。内側はブラックレザーで、ファスナーポケットとオープンポケットを備えています。クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱が付属します。',
      accessories:standardAccessories,views:['メイン画像','左側面','右側面','背面','金具のディテール']
    },
    'birkin-30-bleu-jean.html':{
      name:'Hermès Birkin 30 Bleu Jean',title:'Hermès Birkin 30 Bleu Jean — ED Luxury',
      meta:'2005年製Hermès Birkin 30。Togoレザー、Bleu Jean、Palladium金具。',
      description:'非常に良好な状態です。内側は同系色のブルーレザーで、ファスナーポケットとオープンポケットを備えています。クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱が付属します。',
      accessories:standardAccessories,views:['メイン画像','正面','側面','背面','付属品']
    },
    'birkin-35-rose.html':{
      name:'Hermès Birkin 35 Rose',title:'Hermès Birkin 35 Rose — ED Luxury',
      meta:'2013年製Hermès Birkin 35。Epsomレザー、Rose、Argenté金具。',
      description:'非常に良好な状態です。外側は新品に近く、金具にごく軽い微細な擦れ、留め具に小さな跡があります。内側も新品に近い状態です。クロシェット、カデナ、鍵2本、エルメスのオリジナルボックス、保存袋2点、レインカバー、冊子が付属します。',
      accessories:'クロシェット、カデナ、鍵2本、エルメスのオリジナルボックス、保存袋2点、レインカバー、冊子',views:['メイン画像','側面','背面','金具のディテール','底面']
    },
    'birkin-35-vert-menthe.html':{
      name:'Hermès Birkin 35 Vert Menthe',title:'Hermès Birkin 35 Vert Menthe — ED Luxury',
      meta:'2012年製Hermès Birkin 35。Clémenceレザー、Vert Menthe、Palladium金具。',
      description:'非常に良好な状態です。内側は同系色のレザーで、ファスナーポケットとオープンポケットを備えています。クロシェット、カデナ、鍵2本、レザー製キーストラップ、エルメスの保存袋と箱が付属します。',
      accessories:standardAccessories,views:['メイン画像','正面','左側面','右側面','背面','内側','角のディテール','箱']
    }
  };
  const item=products[p];if(!item)return;
  document.title=item.title;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=item.meta;
  EDL_TRANSLATE({
    'Disponible':'在庫あり','Demander cette pièce':'この商品について問い合わせる','← Retour à la sélection':'← セレクションに戻る',
    'Modèle':'モデル','Cuir':'レザー','Couleur':'カラー','Métal':'金具','Année':'製造年','Stamp':'刻印','État':'状態','Accessoires':'付属品','Dimensions':'サイズ',
    'Très bon état':'非常に良好','Bon état':'良好','Cuir noir':'ブラックレザー'
  });
  const description=document.querySelector('.product-detail-description');if(description)description.textContent=item.description;
  document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(dt?.textContent.trim()==='付属品'&&dd)dd.textContent=item.accessories});
  document.querySelectorAll('.product-gallery img').forEach((img,index)=>{img.alt=item.name+'：'+(item.views[index]||'商品画像')});
})();

(()=>{
  if(EDL_LANG!=='zh')return;
  const p=location.pathname.split('/').pop()||'';
  const standardAccessories='钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子';
  const products={
    'birkin-35-rouge.html':{
      name:'爱马仕 Birkin 35 Rouge',title:'爱马仕 Birkin 35 Rouge — ED Luxury',
      meta:'2006 年爱马仕 Birkin 35，Swift 皮革，Rouge 配色，Palladium 金属件。',
      description:'品相极佳。同色系山羊皮内里配有拉链袋和平口袋。随附钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子。',
      accessories:standardAccessories,views:['主图','正面','另一张正面图','侧面','背面']
    },
    'birkin-35-orange.html':{
      name:'爱马仕 Birkin 35 Orange',title:'爱马仕 Birkin 35 Orange — ED Luxury',
      meta:'2008 年爱马仕 Birkin 35，Togo 皮革，Orange 配色，Palladium 金属件。',
      description:'品相极佳。同色系橙色皮革内里配有拉链袋和平口袋。随附钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子。',
      accessories:standardAccessories,views:['主图','左侧面','右侧面','背面','底部']
    },
    'birkin-35-noir.html':{
      name:'爱马仕 Birkin 35 Noir',title:'爱马仕 Birkin 35 Noir — ED Luxury',
      meta:'1995 年爱马仕 Birkin 35，黑色皮革，Noir 配色，金色金属件。',
      sub:'黑色皮革 · Noir · 金色金属件',
      description:'品相良好。黑色皮革内里配有拉链袋和平口袋。随附钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子。',
      accessories:standardAccessories,views:['主图','左侧面','右侧面','背面','金属件细节']
    },
    'birkin-30-bleu-jean.html':{
      name:'爱马仕 Birkin 30 Bleu Jean',title:'爱马仕 Birkin 30 Bleu Jean — ED Luxury',
      meta:'2005 年爱马仕 Birkin 30，Togo 皮革，Bleu Jean 配色，Palladium 金属件。',
      description:'品相极佳。同色系蓝色皮革内里配有拉链袋和平口袋。随附钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子。',
      accessories:standardAccessories,views:['主图','正面','侧面','背面','配件']
    },
    'birkin-35-rose.html':{
      name:'爱马仕 Birkin 35 Rose',title:'爱马仕 Birkin 35 Rose — ED Luxury',
      meta:'2013 年爱马仕 Birkin 35，Epsom 皮革，Rose 配色，银色金属件。',
      sub:'Epsom · Rose · 银色金属件',
      description:'品相极佳。外观接近全新，金属件有轻微细小划痕，锁扣处有一处小痕迹；内里亦接近全新。随附钟形钥匙套、挂锁、两把钥匙、爱马仕原装盒、两个防尘袋、防雨罩及说明册。',
      accessories:'钟形钥匙套、挂锁、两把钥匙、爱马仕原装盒、两个防尘袋、防雨罩及说明册',views:['主图','侧面','背面','金属件细节','底部']
    },
    'birkin-35-vert-menthe.html':{
      name:'爱马仕 Birkin 35 Vert Menthe',title:'爱马仕 Birkin 35 Vert Menthe — ED Luxury',
      meta:'2012 年爱马仕 Birkin 35，Clémence 皮革，Vert Menthe 配色，Palladium 金属件。',
      description:'品相极佳。同色系皮革内里配有拉链袋和平口袋。随附钟形钥匙套、挂锁、两把钥匙、皮革拉带、爱马仕防尘袋及盒子。',
      accessories:standardAccessories,views:['主图','正面','左侧面','右侧面','背面','内里','包角细节','盒子']
    }
  };
  const item=products[p];if(!item)return;
  document.title=item.title;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=item.meta;
  EDL_TRANSLATE({
    'Disponible':'现货可购','Demander cette pièce':'咨询此款','← Retour à la sélection':'← 返回精选系列',
    'Modèle':'型号','Cuir':'皮质','Couleur':'颜色','Métal':'金属件','Année':'年份','Stamp':'刻印','État':'品相','Accessoires':'配件','Dimensions':'尺寸',
    'Très bon état':'品相极佳','Bon état':'品相良好','Cuir noir':'黑色皮革','Doré':'金色','Argenté':'银色'
  });
  if(item.sub){const sub=document.querySelector('.product-detail-sub');if(sub)sub.textContent=item.sub}
  const description=document.querySelector('.product-detail-description');if(description)description.textContent=item.description;
  document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(dt?.textContent.trim()==='配件'&&dd)dd.textContent=item.accessories});
  document.querySelectorAll('.product-gallery img').forEach((img,index)=>{img.alt=item.name+'：'+(item.views[index]||'商品图片')});
})();

 
(()=>{
  if(EDL_LANG!=='ru')return;
  const p=location.pathname.split('/').pop()||'';
  const standardAccessories='leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка';
  const products={
    'birkin-35-rouge.html':{
      name:'Hermès Birkin 35 Rouge',title:'Hermès Birkin 35 Rouge — ED Luxury',
      meta:'Hermès Birkin 35 2006 года: Swift leather, цвет Rouge, Palladium hardware.',
      description:'Очень хорошее состояние. Подкладка из козьей кожи в тон сумке, с карманом на молнии и открытым карманом. В комплекте leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка.',
      accessories:standardAccessories,views:['главное фото','вид спереди','другой ракурс спереди','вид сбоку','вид сзади']
    },
    'birkin-35-orange.html':{
      name:'Hermès Birkin 35 Orange',title:'Hermès Birkin 35 Orange — ED Luxury',
      meta:'Hermès Birkin 35 2008 года: Togo leather, цвет Orange, Palladium hardware.',
      description:'Очень хорошее состояние. Подкладка из оранжевой кожи в тон сумке, с карманом на молнии и открытым карманом. В комплекте leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка.',
      accessories:standardAccessories,views:['главное фото','вид слева','вид справа','вид сзади','вид снизу']
    },
    'birkin-35-noir.html':{
      name:'Hermès Birkin 35 Noir',title:'Hermès Birkin 35 Noir — ED Luxury',
      meta:'Hermès Birkin 35 1995 года: Black leather, цвет Noir, Gold-tone hardware.',
      sub:'Black leather · Noir · Gold-tone hardware',
      description:'Хорошее состояние. Подкладка из чёрной кожи с карманом на молнии и открытым карманом. В комплекте leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка.',
      accessories:standardAccessories,views:['главное фото','вид слева','вид справа','вид сзади','деталь фурнитуры']
    },
    'birkin-30-bleu-jean.html':{
      name:'Hermès Birkin 30 Bleu Jean',title:'Hermès Birkin 30 Bleu Jean — ED Luxury',
      meta:'Hermès Birkin 30 2005 года: Togo leather, цвет Bleu Jean, Palladium hardware.',
      description:'Очень хорошее состояние. Подкладка из синей кожи в тон сумке, с карманом на молнии и открытым карманом. В комплекте leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка.',
      accessories:standardAccessories,views:['главное фото','вид спереди','вид сбоку','вид сзади','комплектация']
    },
    'birkin-35-rose.html':{
      name:'Hermès Birkin 35 Rose',title:'Hermès Birkin 35 Rose — ED Luxury',
      meta:'Hermès Birkin 35 2013 года: Epsom leather, цвет Rose, Silver-tone hardware.',
      sub:'Epsom · Rose · Silver-tone hardware',
      description:'Очень хорошее состояние. Снаружи сумка почти как новая; на фурнитуре есть несколько едва заметных микроцарапин, а на застёжке — небольшая отметина. Внутри состояние также близко к новому. В комплекте leather key holder, навесной замок, два ключа, оригинальная коробка Hermès, два пыльника, дождевик и буклет.',
      accessories:'leather key holder, навесной замок, два ключа, оригинальная коробка Hermès, два пыльника, дождевик и буклет',views:['главное фото','вид сбоку','вид сзади','деталь фурнитуры','вид снизу']
    },
    'birkin-35-vert-menthe.html':{
      name:'Hermès Birkin 35 Vert Menthe',title:'Hermès Birkin 35 Vert Menthe — ED Luxury',
      meta:'Hermès Birkin 35 2012 года: Clémence leather, цвет Vert Menthe, Palladium hardware.',
      description:'Очень хорошее состояние. Подкладка из кожи в тон сумке, с карманом на молнии и открытым карманом. В комплекте leather key holder, навесной замок, два ключа, кожаный ремешок, пыльник Hermès и фирменная коробка.',
      accessories:standardAccessories,views:['главное фото','вид спереди','вид слева','вид справа','вид сзади','внутренняя отделка','деталь угла','коробка']
    }
  };
  const item=products[p];if(!item)return;
  document.title=item.title;
  const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=item.meta;
  EDL_TRANSLATE({
    'Disponible':'В наличии','Demander cette pièce':'Узнать об этом изделии','← Retour à la sélection':'← Вернуться к коллекции',
    'Modèle':'Модель','Cuir':'Кожа','Couleur':'Цвет','Métal':'Фурнитура','Année':'Год','Stamp':'Stamp','État':'Состояние','Accessoires':'Комплектация','Dimensions':'Размеры',
    'Très bon état':'Очень хорошее','Bon état':'Хорошее','Cuir noir':'Black leather','Doré':'Gold-tone hardware','Argenté':'Silver-tone hardware',
    'Carré J':'Square J','Carré L':'Square L','Carré I':'Square I','Carré P':'Square P','Carré Q':'Square Q','Cercle Y':'Circle Y'
  });
  if(item.sub){const sub=document.querySelector('.product-detail-sub');if(sub)sub.textContent=item.sub}
  const description=document.querySelector('.product-detail-description');if(description)description.textContent=item.description;
  document.querySelectorAll('.product-specs > div').forEach(row=>{const dt=row.querySelector('dt'),dd=row.querySelector('dd');if(dt?.textContent.trim()==='Комплектация'&&dd)dd.textContent=item.accessories});
  document.querySelectorAll('.product-gallery img').forEach((img,index)=>{img.alt=item.name+' — '+(item.views[index]||'фотография изделия')});
})();
