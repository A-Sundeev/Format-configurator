function addConfigFormat () {

    // Данные для вставки цены и описания формата
    let configurationInfoText = {
        'auto': [1000000, `Авто Пломбирия - самый яркий и привлекающий внимание формат сезонной торговой точки, выполненный из ретро автомобиля ГАЗ-21, самого массового советского автомобиля, вид которого вызывает самые тёплые ностальгического чувства. Такая торговая точка видна из далека, а рожок на крыше автомобиля привлекает всех любителей мороженого. Автомобиль Пломбирия занимает 8 кв. м. (2м. х 4м.).
                        <br><br>Ассортимент реализуемых товаров:<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Молочные коктейли
                        <br>&bull; Напитки
                        <br>&bull; Леденцы
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 15 000 руб./мес. (В рабочие месяцы)`,
                        'Торговая точка <br>"Автомобиль":'],
        'island': [160000, `Остров Пломбирия – формат круглогодичных торговых точек для ТЦ, развлекательных центров и административных зданий. Торговые точки, выполненные в стиле эко-friendly в деревянном исполнении, могут быть пристенного и островного типа или располагаться в ряду на фудкорте.
                        <br>Площадь, занимаемая торговой точкой «Остров Пломбирия» может быть от 3 кв. м. до 25 кв. м. (Кафетерий с посадочными местами) в зависимости от ассортимента реализуемых товаров:<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Кофе с собой
                        <br>&bull; Молочные коктейлы
                        <br>&bull; Напитки
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 5 000 - 10 000 руб./мес. (апрель-сентябрь)`,
                        'Торговая точка:'],
        'foodtruck': [800000, `Мобильный Foodtruck Пломбирия - это круглогодичный, уличный мобильный формат с возможностью быстрой смены места размещения. Данная торговая точка отлично подходит для выездной торговли на любых праздниках, ярмарках, концертах и других мероприятиях, где собирается большое количество народа. Foodtruck выполнен из композитных материалов или алюминия в современном дизайне с сохранением стилистики фирменного стиля. Также для автономной работы Foodtruck может комплектоваться электрогенератором.
                        <br><br>Ассортимент возможных реализуемых товаров:<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Молочные коктейли
                        <br>&bull; Кофе с собой
                        <br>&bull; Напитки
                        <br>&bull; Леденцы
                        <br>&bull; Блины
                        <br>&bull; Хот-доги
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 15 000 руб./мес. (В рабочие месяцы)`,
                        'Торговый прицеп:'],
        'cafeteria': [1000000, `Круглогодичный уличный павильон. Занимаемая площадь от 10 кв.м. Яркий и привлекающий внимание формат в современном дизайне.  Павильон изготавливается из композитных материалов, не подверженных коррозии и выцветанию. Фасады павильона украшают светящиеся декоративные фигуры и логотип.<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Молочные коктейли
                        <br>&bull; Кофе с собой
                        <br>&bull; Напитки
                        <br>&bull; Леденцы
                        <br>&bull; Блины
                        <br>&bull; Хот-доги
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 15 000 руб./мес. (В рабочие месяцы)`,
                        'Торговый павильон:'],
        'street': [500000, `Street Пломбирия – яркий, уличный, сезонный павильон работающий с апреля по октябрь. Изготавливается из современного композитного материала не подверженного коррозии и выцветанию, может быть выполнен в различных размерах от 5 кв. м. до 15 кв. м., в зависимости от ассортимента реализуемых товаров.<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Молочные коктейли
                        <br>&bull; Напитки
                        <br>&bull; Кофе с собой
                        <br>&bull; Леденцы
                        <br>&bull; Хот-доги
                        <br>&bull; Блины
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 15 000 руб./мес. (В рабочие месяцы)`,
                        'Торговый павильон:'],
        'miniIsland': [50000, `Mini Остров Пломбирия – самый доступный формат торговой точки, он занимает площадь от 2 кв. м – следовательно не большая сумма арендной платы.
        <br><br>Компактный и яркий формат способный расположиться в самом лучшем месте с высоким трафиком, где нет возможности поставить большую торговую точку.
        
                        <br><br>Ассортимент товаров реализуемый на торговой точке:<br>
                        <br>&bull; Мягкое мороженое
                        <br>&bull; Молочные коктейли
                        <br>&bull; Напитки
                        <br>&bull; Леденцы
                        <br><span class="configuratorPromt">
                        <span class="configuratorPromtHover">&#128712;</span>
                        <span class="configuratorPromtHidden">Роялти – ежемесячные отчисления, выплачиваемые предпринимателем обладателю франшизы, франчайзеру.</span>
                        </span> Роялти: 5 000 - 10 000 руб./мес. (апрель-сентябрь)`,
                        'Торговая точка:']
    }
    // Данные для вставки другие флажки
    let otherCheckboxData = {
        'miniIsland': [['Холодильник для хранения сырья', 15000],
                        ['Холодильник барный для напитков', 25000],
                        ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                        ['Макет «Мороженое» для установки на прилавок', 15000],
                        ['Меню световое "Мороженое" (фомат А1)', 25000],
                        ['Стул', 5000],
                        ['Униформа для продавцов (4 к-та)', 12000],
                        ['Ростовая кукла для проведения промоакций', 30000],
                        ['Флаеры для проведения промоакций', 5000]],

        'street1': [['Холодильник для хранения сырья', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" (фомат А1)', 25000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Ростовая кукла для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],

        'street2': [['Холодильник для хранения сырья', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" и "Кофе" 2 шт (фомат А1) ',   50000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Кофе машина',                        150000],
                    ['Кофемолка',                           50000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],
                    

        'street3': [['Холодильник для хранения сырья', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое", "Кофе", "Фастфуд" 3 шт (фомат А1) ', 75000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Кофе машина', 150000],
                    ['Кофемолка', 50000],
                    ['Блинница', 25000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],

        'island1': [['Холодильник для хранения сырья', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" (фомат А1)',                  25000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],
        
        'island2': [['Холодильник для хранения сырья', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" (фомат А1)', 25000],
                    ['Меню световое "Кофе" (фомат А1)', 25000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Кофе машина', 150000],
                    ['Кофемолка', 50000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],
                    

        'island3': [['Холодильник (1-ый)', 15000],
                    ['Холодильник (2-ой)', 15000],
                    ['Холодильник барный для напитков', 25000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" (фомат А1)', 25000],
                    ['Меню световое "Кофе" (фомат А1)', 25000],
                    ['Меню световое "Фастфуд" (фомат А1)', 25000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Кофе машина', 150000],
                    ['Кофемолка', 50000],
                    ['Блинница', 25000],
                    ['Холодильная витрина для начинок блинов',  30000],
                    ['Аппарат для хотдогов', 20000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],
        
        'auto': [['Холодильник для хранения сырья', 15000],
                    ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                    ['Макет «Мороженое» для установки на прилавок', 15000],
                    ['Меню световое "Мороженое" (фомат А1)', 25000],
                    ['Стул', 5000],
                    ['Униформа для продавцов (4 к-та)', 12000],
                    ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                    ['Флаеры для проведения промоакций', 5000]],
        
        'foodtruck1': [['Холодильник для хранения сырья', 15000],
                        ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                        ['Макет «Мороженое» для установки на прилавок', 15000],
                        ['Меню световое "Мороженое" (фомат А1)', 25000],
                        ['Меню световое "Кофе" (фомат А1)', 25000],
                        ['Стул', 5000],
                        ['Униформа для продавцов (4 к-та)', 12000],
                        ['Кофе машина', 150000],
                        ['Кофемолка', 50000],
                        ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                        ['Флаеры для проведения промоакций', 5000]],

        'foodtruck2': [['Холодильник 2 шт', 30000],
                        ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                        ['Макет «Мороженое» для установки на прилавок', 15000],
                        ['Меню световое "Мороженое" (фомат А1)', 25000],
                        ['Меню световое "Кофе" (фомат А1)', 25000],
                        ['Меню световое "Фастфуд" (фомат А1)', 25000],
                        ['Стул', 5000],
                        ['Униформа для продавцов (4 к-та)', 12000],
                        ['Кофе машина', 150000],
                        ['Кофемолка', 50000],
                        ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                        ['Флаеры для проведения промоакций', 5000]],
        
        'cafeteria': [['Холодильник 2 шт', 30000],
                        ['Холодильник барный для напитков', 25000],
                        ['Инвентарь и доп.оборудование <span style="font-size:14px">(Гастроёмкости, венчик, селиконовые лопатки, бейджи для продавцов, уголок покупателя, книга жалоб и предложений, держатель для рожков с ценами, весы, касса для наличных денежных средств.)</span>', 13000],
                        ['Макет «Мороженое» для установки на прилавок', 15000],
                        ['Меню световое "Мороженое", "Кофе", "Фастфуд" 3 шт (фомат А1) ', 75000],
                        ['Стул', 5000],
                        ['Униформа для продавцов (4 к-та)', 12000],
                        ['Кофе машина', 150000],
                        ['Кофемолка', 50000],
                        ['Блинница', 25000],
                        ['Холодильная витрина для начинок блинов',  30000],
                        ['Аппарат для хотдогов', 20000],
                        ['Ростовая кукла "Мороженое" для проведения промоакций', 30000],
                        ['Флаеры для проведения промоакций', 5000]],
    }

    let configItem                  = document.querySelectorAll(".configurator_select_image_item");
    let configBodyImg               = document.querySelector(".configurator_body_image");
    let configBodyDescHeadName      = document.querySelector(".configurator_body_description_heading_name");
    let configTotalPrice            = document.querySelector(".configurator_footer_total_price");
    let configSelectFillWrapper     = document.querySelector('.configurator_select_fill_wrapper');
    let configSelectImageItemActive = document.querySelector('.configurator_select_image_item_active');

    // запись данных для последующей вставки
    let configBodyprice             = configurationInfoText.miniIsland[0];
    let configBodyDesc              = '';
    let configFooterNameFormat      = '';

    // элементы для вставки данных
    let elemConfigFooterPrice       = document.querySelector(".configFooterPrice");
    let elemConfigBodyDesc          = document.querySelector(".configBodyDesc");
    let elemConfigFooterNameFormat  = document.querySelector(".configFooterNameFormat");
    let elemConfiguratorFooterOther = document.querySelector(".configurator_footer_other");

    // первоначальная цена
    let poushalniyPrice             = 200000;
    let totalPrice                  = configBodyprice + poushalniyPrice;

    // Вставка первоначальных данных
    // фотография
    configBodyImg.src                       = configSelectImageItemActive.querySelector('.configurator_select_image_item_img').src;
    // Цена
    elemConfigFooterPrice.innerHTML         = 'От ' + splitPriceOfRanks(configurationInfoText.miniIsland[0]);
    // Описание
    elemConfigBodyDesc.innerHTML            = configurationInfoText.miniIsland[1];
    // Наименование
    configBodyDescHeadName.innerHTML        = configSelectImageItemActive.querySelector('.configurator_select_image_item_header_name').innerHTML;

    // Вставка первоначальных других флажков
    createOtherCheckbox('miniIsland', otherCheckboxData);

    // при выборе формата менять контент
    for(let i = 0; i < configItem.length; i++) {
        configItem[i].addEventListener('click', function () {
            let actives = document.querySelectorAll('.configurator_select_image_item_active');

            for(let i = 0; i < actives.length; i++) {
                actives[i].classList.remove('configurator_select_image_item_active');
            }

            this.classList.add('configurator_select_image_item_active');

            let img = this.querySelector('.configurator_select_image_item_img').src;
            let name = this.querySelector('.configurator_select_image_item_header_name').innerHTML;

            configBodyImg.src = img;
            configBodyDescHeadName.innerHTML = name;
            
            
            if (this.classList.contains('configurator_select_image_item_auto')) {
                // Изменение данных если выбран формат "Авто"
                configBodyprice         = configurationInfoText.auto[0];
                configBodyDesc          = configurationInfoText.auto[1];
                configFooterNameFormat  = configurationInfoText.auto[2];
                createOtherCheckbox('auto', otherCheckboxData);
                
            } else if (this.classList.contains('configurator_select_image_item_island')) {
                // Изменение данных если выбран формат "Остров"
                configBodyprice         = configurationInfoText.island[0];
                configBodyDesc          = configurationInfoText.island[1];
                configFooterNameFormat  = configurationInfoText.island[2];
                createOtherCheckbox('island1', otherCheckboxData);

            } else if (this.classList.contains('configurator_select_image_item_foodtruck')) {
                // Изменение данных если выбран формат "Foodtruck"
                configBodyprice         = configurationInfoText.foodtruck[0];
                configBodyDesc          = configurationInfoText.foodtruck[1];
                configFooterNameFormat  = configurationInfoText.foodtruck[2];
                createOtherCheckbox('foodtruck1', otherCheckboxData);

            } else if (this.classList.contains('configurator_select_image_item_cafeteria')) {
                // Изменение данных если выбран формат "Cafeteria"
                configBodyprice         = configurationInfoText.cafeteria[0];
                configBodyDesc          = configurationInfoText.cafeteria[1];
                configFooterNameFormat  = configurationInfoText.cafeteria[2];
                createOtherCheckbox('cafeteria', otherCheckboxData);

            } else if (this.classList.contains('configurator_select_image_item_street')) {
                // Изменение данных если выбран формат "Street"
                configBodyprice         = configurationInfoText.street[0];
                configBodyDesc          = configurationInfoText.street[1];
                configFooterNameFormat  = configurationInfoText.street[2];
                createOtherCheckbox('street1', otherCheckboxData);

            } else if (this.classList.contains('configurator_select_image_item_miniIsland')) {
                // Изменение данных если выбран формат "mini Остров"
                configBodyprice         = configurationInfoText.miniIsland[0];
                configBodyDesc          = configurationInfoText.miniIsland[1];
                configFooterNameFormat  = configurationInfoText.miniIsland[2];
                createOtherCheckbox('miniIsland', otherCheckboxData);

            }

            if (!this.classList.contains('configurator_select_image_item_miniIsland') 
            && !this.classList.contains('configurator_select_image_item_foodtruck')
            && !this.classList.contains('configurator_select_image_item_cafeteria')) {
                elemConfigFooterPrice.innerHTML = splitPriceOfRanks(configBodyprice);
            } else {
                elemConfigFooterPrice.innerHTML = 'от ' + splitPriceOfRanks(configBodyprice);
            }
            
            elemConfigBodyDesc.innerHTML = configBodyDesc;
            elemConfigFooterNameFormat.innerHTML = configFooterNameFormat;
            

            calculatorOtherFormat();
            
            totalPrice = configBodyprice;
            totalPrice += poushalniyPrice;
            
            configTotalPrice.innerHTML = splitPriceOfRanks(totalPrice); 

            // Сброс всех влажков
            clearingAllCheckboxes();

            // добавление в наполнение кнопок для выбора типа
            if(this.classList.contains('configurator_select_image_item_street')) {
                // Добавление кнопок для выбора подраздела в формате "Street"
                addButtonsToSelectSizes([['oneStreet', '5 кв. м'], ['twoStreet', '7,5 кв. м'], ['threeStreet', '10 кв. м']]);
            } else if (this.classList.contains('configurator_select_image_item_island')) {
                // Добавление кнопок для выбора подраздела в формате "Остров"
                addButtonsToSelectSizes([['oneIsland', '4 кв. м'], ['twoIsland', '6 кв. м'], ['threeIsland', '8 кв. м']]);
            } else if (this.classList.contains('configurator_select_image_item_foodtruck')) {
                // Добавление кнопок для выбора подраздела в формате "Foodtruck"
                addButtonsToSelectSizes([['oneFoodtruck', 'mini Foodtruck'], ['twoFoodtruck', 'Foodtruck']]);
            } else {
                configSelectFillWrapper.innerHTML = "";
            }

            let configSelectFill = document.querySelector(".configurator_select_fill");
            if(configSelectFill) {
                let configSelectFillActive = configSelectFill.querySelector('.configurator_select_fill_active');

                // изменение наполнения при выборе размера
                let configSelectFillItem = configSelectFill.querySelectorAll('.configSelectFillItem');
                for(let i = 0; i < configSelectFillItem.length; i++) {
                    configSelectFillItem[i].addEventListener('click', function () {
                        // Сброс всех влажков
                        clearingAllCheckboxes();

                        configSelectFillActive.classList.remove('configurator_select_fill_active');
                        configSelectFillActive = this;
                        this.classList.add('configurator_select_fill_active');

                        let dataItem = this.dataset.configfillitem;
                        console.log(dataItem)
                        
                        if(dataItem == 'oneStreet') {
                            // Смена других флажков если выбран street первый вариант
                            reloadPriceConfigSelectFill(configurationInfoText.street[0]);
                            createOtherCheckbox('street1', otherCheckboxData);
                        } else if (dataItem == 'twoStreet') {

                            // Смена других флажков если выбран street второй вариант
                            reloadPriceConfigSelectFill(650000);
                            createOtherCheckbox('street2', otherCheckboxData);
                        } else if (dataItem == 'threeStreet') {
                            console.log(dataItem)

                            // Смена других флажков если выбран street третий вариант
                            reloadPriceConfigSelectFill(800000);
                            createOtherCheckbox('street3', otherCheckboxData);
                        } else if (dataItem == 'oneIsland') {
                            // Смена других флажков если выбран Остров первый вариант
                            reloadPriceConfigSelectFill(configurationInfoText.island[0]);
                            createOtherCheckbox('island1', otherCheckboxData);
                        } else if (dataItem == 'twoIsland') {
                            // Смена других флажков если выбран Остров второй вариант
                            reloadPriceConfigSelectFill(200000);
                            createOtherCheckbox('island2', otherCheckboxData);
                        } else if (dataItem == 'threeIsland') {
                            // Смена других флажков если выбран Остров второй вариант
                            reloadPriceConfigSelectFill(240000);
                            createOtherCheckbox('island3', otherCheckboxData);
                        } else if (dataItem == 'oneFoodtruck') {
                            // Смена других флажков если выбран Foodtruck первый вариант
                            reloadPriceConfigSelectFill(950000, 'от ');
                            createOtherCheckbox('foodtruck1', otherCheckboxData);
                        } else if (dataItem == 'twoFoodtruck') {
                            // Смена других флажков если выбран Foodtruck второй вариант
                            reloadPriceConfigSelectFill(1570000, 'от ');
                            createOtherCheckbox('foodtruck2', otherCheckboxData);
                        }
                        // Обновление калькулятора для других флажков
                        calculatorOtherFormat();
                    })
                }
            }
        })
    }
    
    // Запуск калькулятора для Фризера
    calculatorFreezerAndMixer('configurator_footer_freezer_checkbox_wrapper_item', 
                                'configurator_footer_freezer_checkbox_active', 'confFreezerOnePrice', 
                                'confFreezerTwoPrice', 110000, 150000);

    // Запуск калькулятора для Миксера
    calculatorFreezerAndMixer('configurator_footer_mixer_checkbox_wrapper_item', 
                                'configurator_footer_mixer_checkbox_active', 'confMixerOnePrice', 
                                'confMixerTwoPrice', 15000, 25000);

    // Запуск калькулятора для других флажков
    calculatorOtherFormat()

    // Установка итоговой цены
    configTotalPrice.innerHTML = splitPriceOfRanks(totalPrice);

    // Генерация других флажков в наполнении
    function createOtherCheckbox (key, otherCheckboxData) {
        elemConfiguratorFooterOther.innerHTML = '';
            for(let i = 0; i < otherCheckboxData[key].length; i++) {
                elemConfiguratorFooterOther.insertAdjacentHTML('beforeend',`
                    <div class="configurator_footer_other_checkbox_item">
                        <div class="configurator_footer_checkbox_wrapper">
                            <p class="configurator_footer_checkbox_wrapper_name">${otherCheckboxData[key][i][0]}</p>
                        </div>
                        <div class="configurator_footer_payment_wrapper">
                            <p class="configurator_footer_checkbox_wrapper_price">${splitPriceOfRanks(otherCheckboxData[key][i][1])}</p>
                            <div class="configurator_footer_other_checkbox_wrapper_item" data-confPriceForPlug="${otherCheckboxData[key][i][1]}"></div>
                        </div>
                    </div>
                `);
            }
    }

    // Добавление кнопок для выбора подраздела в формате
    function addButtonsToSelectSizes (names) {
        configSelectFillWrapper.innerHTML = '';
        let head = document.createElement('h4');
        head.innerHTML = 'Выбор варианта размера и наполнения формата:';
        
        let elemWraper = document.createElement('div');
        elemWraper.classList.add('configurator_select_fill');
        configSelectFillWrapper.append(head);
        for(let i = 0; i < names.length; i++) {
            let elem = document.createElement('div');
            elem.classList.add('configSelectFillItem');
            elem.dataset.configfillitem = names[i][0];
            elem.innerHTML = names[i][1]

            if(i == 0) {
                elem.classList.add('configurator_select_fill_active');
            }

            elemWraper.append(elem);
        }
        
        configSelectFillWrapper.append(elemWraper);
    }

    // Изменение цены при выборе размера для наполнения
    function reloadPriceConfigSelectFill (formatPrice, ot = '') {
        let dataItemPrice = formatPrice;
        totalPrice = dataItemPrice + poushalniyPrice;
        elemConfigFooterPrice.innerHTML = ot + splitPriceOfRanks(dataItemPrice);
        configTotalPrice.innerHTML = splitPriceOfRanks(totalPrice);
    }
    
    // Сброс всех флажков
    function clearingAllCheckboxes () {
        let active_checkboxF = document.querySelectorAll('.configurator_footer_freezer_checkbox_active');
        let active_checkboxM = document.querySelectorAll('.configurator_footer_mixer_checkbox_active');
        for(let i = 0; i < active_checkboxF.length; i++) {
            active_checkboxF[i].classList.remove("configurator_footer_freezer_checkbox_active");
            active_checkboxF[i].innerHTML = "";
        }
        for(let i = 0; i < active_checkboxM.length; i++) {
            active_checkboxM[i].classList.remove("configurator_footer_mixer_checkbox_active");
            active_checkboxM[i].innerHTML = "";
        }
    }

    //калькулятор для фризера и миксера
    function calculatorFreezerAndMixer (checkboxName, active, confOnePriceName, confTwoPriceName, onePrice, twoPrice) {
        let checkboxes = document.querySelectorAll('.' + checkboxName);
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("click", function () {
                let activeElems = document.querySelectorAll('.' + active);
                
                this.classList.toggle(active);
                if(this.id == confOnePriceName) {
                    totalPrice += onePrice;
                } else if (this.id == confTwoPriceName) {
                    totalPrice += twoPrice;
                }

                if(this.classList.contains(active)) {
                    this.innerHTML = "&#10004";
                } else {
                    this.innerHTML = "";
                    if(this.id == confOnePriceName) {
                        totalPrice -= onePrice;
                    } else if (this.id == confTwoPriceName) {
                        totalPrice -= twoPrice;
                    }
                }

                for(let i = 0; i < activeElems.length; i++) {
                    activeElems[i].classList.remove(active);
                    activeElems[i].innerHTML = "";

                    if(activeElems[i].id == confOnePriceName) {
                        totalPrice -= onePrice;
                    } else if (activeElems[i].id == confTwoPriceName) {
                        totalPrice -= twoPrice;
                    }
                } 
                configTotalPrice.innerHTML = splitPriceOfRanks(totalPrice);
            })
        }
    }
    
    // калькулятор других значений
    function calculatorOtherFormat () {
        let checkboxOther = document.querySelectorAll('.configurator_footer_other_checkbox_wrapper_item');

        for(let i = 0; i < checkboxOther.length; i++) {
            checkboxOther[i].addEventListener("click", function () {
                let confPriceForPlug = this.dataset.confpriceforplug;
                this.classList.toggle('configurator_footer_other_checkbox_active');
                if(this.classList.contains('configurator_footer_other_checkbox_active')) {
                    totalPrice += +confPriceForPlug;
                    this.innerHTML = "&#10004";
                } else {
                    totalPrice -= confPriceForPlug
                    this.innerHTML = "";
                }
                configTotalPrice.innerHTML = splitPriceOfRanks(totalPrice);
            })
        }
    }

    //Дробление цены на разряды
    function splitPriceOfRanks (price) {
        return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + " &#8381;";
    }
}
addConfigFormat();