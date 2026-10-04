(() => {
  'use strict';
  const picture = (file, caption) => ({file, caption, type:'image'});
  const movie = (file, caption) => ({file, caption, type:'video', poster:file.replace(/\.mp4$/, '-poster.webp')});
  const projects = {
    planning: {
      "title": "إدارة الحسابات وصناعة المحتوى بالذكاء الاصطناعي (AI)",
      "label": "المجوهرات — تنسيق محتوى المجوهرات وتطوير الأفكار بما يناسب هوية العلامة.",
      "media": [
        {
          "file": "PLAN4.jpeg",
          "caption": "تخطيط المحتوى — توزيع المنشورات",
          "type": "image"
        },
        {
          "file": "PLANG MANGE GOLD 4.jpeg",
          "caption": "المحتوى البصري لحساب المجوهرات",
          "type": "image"
        },
        {
          "file": "PLAN2.jpeg",
          "caption": "تخطيط المحتوى — اختيار الصور والأفكار",
          "type": "image"
        },
        {
          "file": "PLANG MANGE GOLD 3.jpeg",
          "caption": "تنسيق حساب المجوهرات",
          "type": "image"
        },
        {
          "file": "PLAN1.jpeg",
          "caption": "تخطيط المحتوى — نماذج المنتجات والتفاصيل",
          "type": "image"
        },
        {
          "file": "PLAN3.jpeg",
          "caption": "تخطيط المحتوى — مكتبة الصور والمراجع",
          "type": "image"
        },
        {
          "file": "PLANG MANGE GOLD 2.jpeg",
          "caption": "محتوى العلامة والمنتجات",
          "type": "image"
        },
        {
          "file": "PLANG MANGE GOLD 1.jpeg",
          "caption": "محتوى المنتجات — مجوهرات المحيسن",
          "type": "image"
        }
      ]
    },
    contracts: {
      "title": "التعاقدات والتعاونات",
      "label": "تنسيق التعاقدات ومتابعة تغطيات الجهات وصنّاع المحتوى.",
      "media": [
        {
          "file": "TAG1.jpeg",
          "caption": "سجل الجهات المتعاقد معها",
          "type": "image"
        },
        {
          "file": "PO1.jpeg",
          "caption": "متابعة تنفيذ تغطيات صناع المحتوى",
          "type": "image"
        },
        {
          "file": "PO2.jpeg",
          "caption": "دراسة حسابات صناع المحتوى للتعاون",
          "type": "image"
        }
      ]
    },
    vera: {
      "title": "ابتكار الشعار وتأسيس الهوية — فيرا",
      "label": "ابتكاري لشعار وهوية لمستشفى فيرا",
      "media": [
        {
          "file": "logo var(2).png",
          "caption": "شعار مستشفى فيرا",
          "type": "image"
        },
        {
          "file": "vera1(3).png",
          "caption": "التصوّر والتخطيط البصري قبل البناء",
          "type": "image"
        },
        {
          "file": "vera12.png",
          "caption": "تطبيق الشعار المصمّم على المبنى بالواقع",
          "type": "image"
        },
        {
          "file": "vera1.jpeg",
          "caption": "كتالوج تطبيقات الهوية — الإطلاق العربي",
          "type": "image"
        },
        {
          "file": "vera 5.jpeg",
          "caption": "تطبيقات الهوية — الإطلاق الإنجليزي",
          "type": "image"
        },
        {
          "file": "vera2.jpeg",
          "caption": "تطبيقات الهوية",
          "type": "image"
        },
        {
          "file": "vera3.jpeg",
          "caption": "محتوى المكان",
          "type": "image"
        },
        {
          "file": "vera4.jpeg",
          "caption": "محتوى الخدمات",
          "type": "image"
        },
        {
          "file": "booth3.png",
          "caption": "تطبيق الهوية في المعرض",
          "type": "image"
        }
      ]
    },
    gifts: {
      "title": "المنتجات والهدايا",
      "label": "تصوير المنتجات وتقديم تجربة الإهداء بمحتوى بصري.",
      "media": [
        {
          "file": "gif3.png",
          "caption": "محتوى المنتجات والهدايا",
          "type": "image"
        },
        {
          "file": "gif.png",
          "caption": "العطور والشوكولاتة والهدايا",
          "type": "image"
        },
        {
          "file": "gif 2.png",
          "caption": "الورد والإهداء — JOI GIFT",
          "type": "image"
        }
      ]
    },
    study: {
      "title": "دراسة المحتوى وتنسيقه",
      "label": "تحليل الأفكار وتنسيق المحتوى لعرض واضح ومتناسق.",
      "media": [
        {
          "file": "tech5.jpeg",
          "caption": "دراسة المحتوى — تنسيق بيج",
          "type": "image"
        },
        {
          "file": "tech3.jpeg",
          "caption": "دراسة المحتوى — بطاقات داكنة",
          "type": "image"
        },
        {
          "file": "tech1.jpeg",
          "caption": "دراسة المحتوى — إطارات داكنة",
          "type": "image"
        },
        {
          "file": "tech2.jpeg",
          "caption": "دراسة المحتوى — إطارات فاتحة",
          "type": "image"
        },
        {
          "file": "tech4.jpeg",
          "caption": "دراسة المحتوى — بطاقات فاتحة",
          "type": "image"
        }
      ]
    },
    designs: {
      "title": "التصاميم التسويقية",
      "label": "تصميم محتوى يوضّح الخدمات والعروض بما يناسب هوية العلامة.",
      "media": [
        {
          "file": "pr  is.png",
          "caption": "المحتوى التسويقي",
          "type": "image"
        },
        {
          "file": "mange is2.jpeg",
          "caption": "الفروع وأماكن التواجد",
          "type": "image"
        }
      ]
    },
    videos: {
      "title": "تغطياتي والمحتوى المصور",
      "label": "تغطيات مصوّرة وتجارب العملاء والنتائج.",
      "media": [
        {
          "file": "vid as5.mp4",
          "caption": "أستيتيكا — المكان والتفاصيل",
          "type": "video",
          "poster": "vid as5-poster.webp"
        },
        {
          "file": "vid a4.mp4",
          "caption": "أستيتيكا — تجربة العلامة",
          "type": "video",
          "poster": "vid a4-poster.webp"
        },
        {
          "file": "vid ema1.mp4",
          "caption": "د. إيمان العبرة — محتوى العناية",
          "type": "video",
          "poster": "vid ema1-poster.webp"
        },
        {
          "file": "vid as2.mp4",
          "caption": "أستيتيكا — تجربة تجميلية",
          "type": "video",
          "poster": "vid as2-poster.webp"
        },
        {
          "file": "vid as1.mp4",
          "caption": "أستيتيكا — محتوى الخدمة",
          "type": "video",
          "poster": "vid as1-poster.webp"
        },
        {
          "file": "vid as3.mp4",
          "caption": "أستيتيكا — محتوى قصير",
          "type": "video",
          "poster": "vid as3-poster.webp"
        },
        {
          "file": "vid ema2.mp4",
          "caption": "أستيتيكا — محتوى الخدمة",
          "type": "video",
          "poster": "vid ema2-poster.webp"
        }
      ]
    },
    social: {
      "title": "إدارة الحسابات — العيادات والجماليات",
      "label": "تنسيق محتوى العيادات والجماليات ومتابعة حضورها على المنصات.",
      "media": [
        {
          "file": "mange em.jpeg",
          "caption": "د. إيمان العبرة",
          "type": "image"
        },
        {
          "file": "mang1.jpeg",
          "caption": "عيادات د. مساعد الزلال",
          "type": "image"
        },
        {
          "file": "mange ber1.jpeg",
          "caption": "بيفرلي هيلز — محتوى تيك توك",
          "type": "image"
        },
        {
          "file": "mange lab1.jpeg",
          "caption": "لابوتيه — محتوى تيك توك",
          "type": "image"
        },
        {
          "file": "mange em2.jpeg",
          "caption": "د. إيمان العبرة — نماذج إضافية",
          "type": "image"
        },
        {
          "file": "mang 2 iz.jpeg",
          "caption": "عيادات د. مساعد الزلال — نماذج إضافية",
          "type": "image"
        },
        {
          "file": "mange bre2.jpeg",
          "caption": "بيفرلي هيلز — نماذج إضافية",
          "type": "image"
        },
        {
          "file": "mange lab2.jpeg",
          "caption": "لابوتيه — نماذج إضافية",
          "type": "image"
        }
      ]
    },
    ads: {
      "title": "الحملات التسويقية — العيادات والجماليات",
      "label": "تخطيط العروض ومتابعة أداء الحملات عبر تقارير المنصات.",
      "media": [
        {
          "file": "pro1.png",
          "caption": "٣٦٩٬٨٨٨ مرة ظهور",
          "type": "image"
        },
        {
          "file": "WATS3.jpeg",
          "caption": "حملة العروض الموسمية",
          "type": "image"
        },
        {
          "file": "WATS5.jpeg",
          "caption": "عروض العناية والتجميل",
          "type": "image"
        },
        {
          "file": "pro2.png",
          "caption": "تقرير الوصول والتفاعل والرسائل",
          "type": "image"
        },
        {
          "file": "pro3.png",
          "caption": "مؤشرات التكلفة والظهور والنقرات",
          "type": "image"
        },
        {
          "file": "WATS4.jpeg",
          "caption": "حملة عروض العيادة",
          "type": "image"
        },
        {
          "file": "OFFER1.jpeg",
          "caption": "إعداد عروض خدمات الجماليات",
          "type": "image"
        }
      ]
    },
    events: {
      "title": "المعارض والفعاليات",
      "label": "إدارتي وتنسيقي للمعارض والفعاليات للعيادات (2023)",
      "media": [
        {
          "file": "booth1.png",
          "caption": "جناح المركز الاستشاري",
          "type": "image"
        },
        {
          "file": "booth3.png",
          "caption": "جناح مستشفى فيرا",
          "type": "image"
        },
        {
          "file": "booth2.png",
          "caption": "المركز الاستشاري — زاوية أخرى",
          "type": "image"
        }
      ]
    },
    presence: {
      "title": "خطة المحتوى ورفع السمعة الرقمية",
      "label": "تخطيط المحتوى ومتابعة تقييمات الفروع وحضورها الرقمي.",
      "media": [
        {
          "file": "rt2.png",
          "caption": "المركز الاستشاري — فرع الصحافة",
          "type": "image"
        },
        {
          "file": "mh 2.png",
          "caption": "خطة محتوى إنستغرام — أغسطس",
          "type": "image"
        },
        {
          "file": "rt1.png",
          "caption": "المركز الاستشاري — فرع المرسلات",
          "type": "image"
        },
        {
          "file": "mh 1.png",
          "caption": "جدول الموضوعات والأطباء والفروع",
          "type": "image"
        }
      ],
      "download": "محتوى الانستقرام,تويتر لشهر يناير(تم الاسترداد تلقائياً).xlsx"
    },
    jewelryAds: {
      "title": "الحملات التسويقية — المجوهرات",
      "label": "الترويج للمنتجات وحملات واتساب",
      "media": [
        {
          "file": "WATS1.jpeg",
          "caption": "حملة اليوم الوطني",
          "type": "image"
        },
        {
          "file": "WATS2.jpeg",
          "caption": "الترويج للمنتجات",
          "type": "image"
        },
        {
          "file": "WATS6.jpeg",
          "caption": "محتوى حملة اليوم الوطني",
          "type": "image"
        }
      ]
    }
  };
  const asset = name => encodeURIComponent(name);
  const dialog = document.getElementById('gallery-dialog');
  const stage = document.getElementById('gallery-stage');
  const caption = document.getElementById('gallery-caption');
  const counter = document.getElementById('gallery-counter');
  const thumbs = document.getElementById('gallery-thumbs');
  const prev = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  const download = document.getElementById('gallery-download');
  let currentProject, position = 0, lastTrigger, pointerStart;

  function stopVideos() { document.querySelectorAll('video').forEach(v => v.pause()); }
  function display() {
    stopVideos();
    stage.replaceChildren();
    const item = currentProject.media[position];
    const media = document.createElement(item.type === 'video' ? 'video' : 'img');
    if(item.type === 'video') {
      media.controls = true; media.playsInline = true; media.preload = 'metadata';
      media.poster = asset(item.poster); media.setAttribute('aria-label',item.caption);
    } else { media.alt = item.caption; media.decoding = 'async'; }
    media.src = asset(item.file);
    media.addEventListener('error', () => {
      const msg = document.createElement('div'); msg.className = 'media-error';
      msg.textContent = 'تعذر تحميل الملف.';
      const link = document.createElement('a'); link.href = asset(item.file); link.textContent = 'فتح الملف'; link.target = '_blank'; link.rel = 'noopener';
      msg.append(link); stage.replaceChildren(msg);
    }, {once:true});
    stage.append(media);
    caption.textContent = item.caption;
    counter.textContent = `${position+1} / ${currentProject.media.length}`;
    prev.disabled = position === 0; next.disabled = position === currentProject.media.length-1;
    Array.from(thumbs.children).forEach((t,i) => t.setAttribute('aria-current',i === position ? 'true' : 'false'));
  }
  function openProject(name,start,trigger) {
    if(!projects[name]) return;
    currentProject = projects[name]; position = Math.min(Math.max(0,start||0),currentProject.media.length-1); lastTrigger = trigger;
    document.getElementById('gallery-title').textContent = currentProject.title;
    document.getElementById('gallery-label').textContent = currentProject.label;
    thumbs.replaceChildren();
    currentProject.media.forEach((item,i) => {
      const b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label',item.caption);
      const im = document.createElement('img'); im.src = asset(item.poster||item.file); im.alt = ''; im.loading = 'lazy'; b.append(im);
      if(item.type === 'video') {const mark = document.createElement('span'); mark.className = 'thumb-video'; mark.textContent = 'فيديو'; b.append(mark);}
      b.addEventListener('click',() => {position=i;display();}); thumbs.append(b);
    });
    download.hidden = !currentProject.download;
    if(currentProject.download) download.href = asset(currentProject.download); else download.removeAttribute('href');
    document.body.classList.add('gallery-open'); dialog.showModal(); display(); dialog.querySelector('.gallery-close').focus();
  }
  document.querySelectorAll('[data-gallery]').forEach(b => b.addEventListener('click',() => openProject(b.dataset.gallery,Number(b.dataset.start||0),b)));
  dialog.querySelector('.gallery-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('close',() => {stopVideos();stage.replaceChildren();document.body.classList.remove('gallery-open');if(lastTrigger) lastTrigger.focus({preventScroll:true});});
  dialog.addEventListener('click',e => {if(e.target === dialog) {const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close();}});
  prev.addEventListener('click',() => {if(position>0){position--;display();}});
  next.addEventListener('click',() => {if(position<currentProject.media.length-1){position++;display();}});
  document.addEventListener('keydown',e => {if(!dialog.open) return;if(e.key==='ArrowLeft'){e.preventDefault();next.click();}if(e.key==='ArrowRight'){e.preventDefault();prev.click();}});
  stage.addEventListener('pointerdown',e => {pointerStart = e.target.closest('video') ? null : {x:e.clientX,y:e.clientY};});
  stage.addEventListener('pointerup',e => {if(!pointerStart)return;const dx=e.clientX-pointerStart.x,dy=e.clientY-pointerStart.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5){if(dx>0) next.click();else prev.click();}pointerStart=null;});
  stage.addEventListener('pointercancel',()=>{pointerStart=null;});
  document.querySelectorAll('video').forEach(v => v.addEventListener('play',() => {document.querySelectorAll('video').forEach(other => {if(other!==v)other.pause();});}));

  const work = document.getElementById('work');
  const sectionArrows = work ? Array.from(work.querySelectorAll('.section-flow')) : [];
  if(sectionArrows.length > 1) {
    let railFrame;
    const alignSectionRail = () => {
      if(railFrame) cancelAnimationFrame(railFrame);
      railFrame = requestAnimationFrame(() => {
        railFrame = null;
        const bounds = work.getBoundingClientRect();
        const first = sectionArrows[0].getBoundingClientRect();
        const last = sectionArrows[sectionArrows.length - 1].getBoundingClientRect();
        work.style.setProperty('--rail-top', `${Math.max(0, first.top + first.height / 2 - bounds.top)}px`);
        work.style.setProperty('--rail-bottom', `${Math.max(0, bounds.bottom - last.top - last.height / 2)}px`);
      });
    };
    window.addEventListener('load', alignSectionRail, {once:true});
    window.addEventListener('resize', alignSectionRail);
    if(document.fonts?.ready) document.fonts.ready.then(alignSectionRail);
    if('ResizeObserver' in window) {
      const railObserver = new ResizeObserver(alignSectionRail);
      railObserver.observe(work);
    }
    alignSectionRail();
  }

})();
