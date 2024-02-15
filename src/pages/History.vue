<template><q-page>
  <q-card>
    <q-card-section>
      <h3>Путешествие в историю </h3>
      <p>
    В подборке перечислены достопримечательности Москвы, отвечающие следующим
    требованиям:
</p>
<p>
    - сосредоточенность в одной точке (т.к. Кремль, ВДНХ и т.д. достаточно
    протяжённые по площади и заключают в себе множество точечных
    достопримечательностей)
</p>
<p>
    - устойчивая работа GPS (в районе Кремля, Красной площади, парка Зарядье
    стоят глушилки, геопозиционирование работает со сбоями).
</p>
<p>
    - свободный доступ
</p>
<p>
    - интересный, яркий внешний вид.
</p>
<p>
    Описания и иллюстрации взяты с популярных ресурсов «как есть», в дальнейшем
    будут доработаны.
</p><p>
  Карта
</p>
  <yandex-map :coords="coords" :settings="settings">
      <ymap-marker
        marker-id="1"
        :coords="coords1"
        :marker-events="['click']"
      ></ymap-marker>
      <ymap-marker
        marker-id="2"
        :coords="coords2"
        :marker-events="['click']"
      ></ymap-marker>
            <ymap-marker
        marker-id="3"
        :coords="coords3"
        :marker-events="['click']"
      ></ymap-marker>
            <ymap-marker
        marker-id="4"
        :coords="coords4"
        :marker-events="['click']"
      ></ymap-marker>
            <ymap-marker
        marker-id="5"
        :coords="coords5"
        :marker-events="['click']"
      ></ymap-marker>
    </yandex-map>
<p>
    <strong>        <q-btn
          depressed
          color="primary"
          @click="onSendClick"
        >
          Оправить свои координаты
        </q-btn> {{location}} {{ycoords}}</strong>
</p>
<h3>Новодевичий монастырь </h3>
 <q-img
      src="~assets/i1.png"

      style="  width: 580px"
    />
<p><b>Пользователи мессенджера которые там были: {{name1}}</b></p>
<p>
    Новодевичий монастырь в 2024 году отметит 500-летний юбилей, что делает его
    одним из старейших на территории Москвы. До сих пор историки не пришли к
    единому мнению насчет происхождения названия: одни полагают, что раньше на
    территории монастыря было поле, откуда юных девушек отправляли в дань
    Золотой Орде. Другие считают, что монастырь был женским, но не единственным
    в Москве, из-за чего и добавилась приставка «ново». Сегодня обитель
    находится на одноименной набережной и является музеем, но службы в стенах
    местных храмов проводятся по сей день. Весь архитектурный ансамбль — это
    отличный пример древнерусского зодчества, а особое восхищение вызывают
    Успенская церковь и Смоленский собор.
</p>
<h3>
    Большой театр
</h3>
<q-img
      src="~assets/i2.png"

      style="  width: 580px"
    />
<p><b>Пользователи мессенджера которые там были: {{name2}}</b></p>
<p>
    Большой театр — это главный театр России и один из самых значимых во всём
    мире. Именно его здание изображено на 100-рублевой купюре и нескольких
    почтовых марках, а на его сцене выступали самые именитые актеры и оперные
    певцы России. За всю историю на подмостках Большого театра поставили больше
    800 спектаклей по пьесам русских и зарубежных драматургов. Во многом
    прежний репертуар сохранился и сегодня, поэтому каждый зритель имеет
    возможность увидеть постановки, которые показывали 100 и 200 лет назад.
    Само здание является историческим и архитектурным памятником, представляя
    собой один из лучших примеров классицизма.
</p>
<h3>
    Останкинская Телебашня
</h3>
<q-img
      src="~assets/i3.png"

      style="  width: 580px"
    />
<p><b>Пользователи мессенджера которые там были: {{name3}}</b></p>
<p>
    Телебашня в Останкинском районе является самым высоким сооружением на
    территории России и Европы. Первую очередь сдали в эксплуатацию в 1967, а 4
    ноября того же года впервые послали телевизионный сигнал. Строительство
    завершили через год, а на разворот всех антенн в городе в сторону Останкино
    ушло около двух месяцев. С переходом на цифровое телевидение роль башни в
    телевещании постепенно уменьшается, но туристический поток с каждым годом
    лишь растет. Что привлекает людей? — Музей развития телевидения, концертный
    зал, смотровые площадки и ресторан «Седьмое небо», где с более чем
    300-метровой высоты открываются головокружительные виды. Можно уверенно
    сказать, что Останкинская телебашня — это символ эпохи, который ещё много
    лет простоит благодаря неугасающему интересу.
</p>
<h3>
    Петровский путевой дворец
</h3>
<q-img
      src="~assets/i4.png"

      style="  width: 580px"
    />
<p><b>Пользователи мессенджера которые там были: {{name4}}</b></p>
<p>
    Успешное завершение Русско-турецкой войны 1768-1744 гг. положительно
    сказалось на экономическом состоянии России и стало поводом для
    строительства пары-тройки дворцов в честь такого события. Одним из
    сооружений, появившихся в ту эпоху, является Петровский путевой дворец,
    построенный по приказу Екатерины II. Было у этого здания и практическое
    применение, ведь здесь монархи могли останавливаться во время длительных
    путешествий в Санкт-Петербург и другие регионы страны.
</p>
<p>
    Путевой дворец сильно пострадал во время Отечественной войны 1812 года и
    долгое время пустовал, пока восстановить его не поручил Николай I в 1826
    году. После этого дворец заиграл новыми красками, а известный литературный
    критик В. Г. Белинский называл его лучшим местом в Москве. Увы, большинство
    интерьеров были утрачены в 1920-х, когда во дворце открыли Академию
    Воздушного флота и провели перепланировку. Тем не менее Петровский путевой
    дворец спустя многие годы является одним из красивейших архитектурных
    памятников столицы.
</p>

<h3>Патриаршие пруды</h3>
<q-img
      src="~assets/i5.png"

      style="  width: 580px"
    />
<p><b>Пользователи мессенджера которые там были: {{name5}}</b></p>
<p>
    Некогда здесь было три озера, а теперь осталось лишь одно, овеянное
    легендами относительно его прошлого. Говорят, в языческие времена здесь
    устраивали жертвоприношения – отрубали головы, а после выкидывали в пруд.
</p>
<p>
    Согласно другой истории, в болоте обитала нечистая сила, устаивая козни
    всякому, кто приближался, отчего его долгое время называли Козьим. Но, не
    смотря на жуткие предания, в XVII в. здесь была резиденция Патриарха.
    Теперь же это место – культурное наследие, вокруг которого разбили парк.
</p>
<p>
    Купание на озере строго запрещено. Интересный факт: ни одно животное ни
    пьет воды из пруда, а утки и лебеди на ночь улетают оттуда.
</p>
    </q-card-section>
  </q-card>
</q-page>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import { computed, defineComponent, ref } from "vue";
import { useStore } from 'vuex'
import API from "../api/api.js";

export default {
  name: 'App',
  components: { yandexMap, ymapMarker },
  setup() {
        const $store = useStore()
    const userName = computed({
      get: () => $store.state.mes.userName,
      set: val => {
        $store.commit('mes/updateUserNameState', val)
      }
      })
    const messages = computed({
      get: () => $store.state.mes.messages,
      set: val => {
        $store.commit('mes/updateMessagesState', val)
      }
    })
    const intervalCtx = computed({
      get: () => $store.state.mes.intervalCtx,
      set: val => {
        $store.commit('mes/updateIntervalCtxState', val)
      }
    })
    const lastMsgID = computed({
      get: () => $store.state.mes.lastMsgID,
      set: val => {
        $store.commit('mes/updateLastMsgIDState', val)
      }
    })
    const messageText = computed({
      get: () => $store.state.mes.messageText,
      set: val => {
        $store.commit('mes/updateMessageTextState', val)
      }
    })
    let location=[]
    return {
      coords: [55.75, 37.61],
      coords1: [55.726822, 37.557682],
      coords2: [55.760178, 37.618575],
      coords3: [55.819721, 37.611704],
      coords4: [55.793745, 37.552540],
      coords5: [55.763855, 37.592132],
      name1:"",
      name2:"",
      name3:"",
      name4:"",
      name5:"",
      ycoords: ref([55.75, 37.61]),
      location,
      settings : {
        apiKey: '73784db1-80df-448a-95a3-6f81554055ea',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
    },$store, userName, messages, intervalCtx, lastMsgID,  messageText,
    }
  },
  //   mounted() {
  //   // this.userName = "Login";
  //   this.intervalCtx = setInterval(async () => {
  //     try {
  //       const msg = await API.getMessage(this.lastMsgID);
  //       if (typeof msg === typeof {}) {
  //         this.messages=msg
  //         this.lastMsgID++
  //       }
  //     } catch (e) {}
  //   }, 1000);
  // },
  // unmounted() {
  //   clearInterval(this.intervalCtx);
  // },
  methods: {
    // Реакция на кнопку отправки
    onSendClick() {
    // if(!("geolocation" in navigator)) {
    //   this.errorStr = 'Geolocation is not available.';
    //   return;
    // }

    // this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.location = pos;
    },)
    // setTimeout(() => {
    //     console.log("Weit4000!");
    //   }, 4000);
    this.ycoords=[this.location["coords"]["latitude"],this.location["coords"]["longitude"]]
    let e=0.01
    // console.log("dfffffffffff")
    // console.log(this.coords1[0])
    if ((Math.abs(this.coords1[0]-this.ycoords[0])<=e) && (Math.abs(this.coords1[1]-this.ycoords[1])<=e)){

      this.name1=this.userName
    }
    if ((Math.abs(this.coords2[0]-this.ycoords[0])<=e) && (Math.abs(this.coords2[1]-this.ycoords[1])<=e)){

      this.name2=this.userName
    }
    if ((Math.abs(this.coords3[0]-this.ycoords[0])<=e) && (Math.abs(this.coords3[1]-this.ycoords[1])<=e)){

      this.name3=this.userName
    }
    if ((Math.abs(this.coords4[0]-this.ycoords[0])<=e) && (Math.abs(this.coords4[1]-this.ycoords[1])<=e)){

      this.name4=this.userName
    }
    if ((Math.abs(this.coords5[0]-this.ycoords[0])<=e) && (Math.abs(this.coords5[1]-this.ycoords[1])<=e)){

      this.name5=this.userName
    }
    this.$forceUpdate();
    // err => {
    //   this.gettingLocation = false;
    //   this.errorStr = err.message;
    // })

    },
},
}
</script>
<style>
.ymap-container {
  height: 600px;
}
</style>
