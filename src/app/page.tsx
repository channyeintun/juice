import Image from "next/image";

export default function JuicePage() {
  return (
    <main className="article-container myanmar-text">
      {/* Header */}
      <header className="header">
        <h1>Juice</h1>
        <p className="subtitle">Software design ရဲ့ လျှို့ဝှက်ချက် - experience ကို ပိုပြီးသက်ဝင်လှုပ်ရှားလာစေဖို့</p>
      </header>


      {/* Hero Image */}
      <div className="flex justify-center mb-10">
        <Image
          src="/juice.webp"
          alt="Carton of orange juice"
          width={250}
          height={256}
          priority
          className="h-auto block"
        />
      </div>

      {/* Table of Contents */}
      <nav className="toc">
        <div className="toc-title">မာတိကာ (Table of Contents)</div>
        <ul className="toc-list">
          <li><a href="#intro">01. Juice ဆိုတာဘာလဲ</a></li>
          <li><a href="#game-feel">02. Game feel</a></li>
          <li><a href="#emotional-requirements">03. Emotional requirements</a></li>
          <li><a href="#soul">04. Soul</a></li>
          <li><a href="#examples">05. Examples</a></li>
          <li><a href="#references">06. References</a></li>
        </ul>
      </nav>

      {/* Introduction */}
      <section id="intro">
        <p>
          <strong>Juice ဆိုတာ user experience ကို ပိုပြီးပြည့်စုံစေဖို့ ထည့်သွင်းပေးရတဲ့ non-essential visual, audio နဲ့ haptic effects တွေကို ခေါ်တာဖြစ်ပါတယ်။</strong>
          ဒီ effects တွေက software ရဲ့ အခြေခံ function တွေအတွက် မဖြစ်မနေ လိုအပ်တာမျိုး မဟုတ်ပေမယ့် user ရဲ့ ခံစားမှုကိုတော့ သိသိသာသာ မြှင့်တင်ပေးနိုင်ပါတယ်။
        </p>

        <p>
          ဥပမာပြောရရင် Mario ဂိမ်းမှာ mushroom တစ်ခုကို စားလိုက်တဲ့အခါ ကြည်လင်တဲ့ အသံလေးတစ်ခု ထွက်လာတာမျိုးပေါ့။
          အဲ့ဒီမှာပေါ်လာတဲ့ <em>1UP</em> ဆိုတဲ့ စာသားကတော့ essential ဖြစ်ပါတယ်။ ဘာလို့လဲဆိုတော့ player က အသက်တစ်ချောင်း ပိုရသွားပြီဆိုတဲ့ သတင်းအချက်အလက်ကို ပေးနေတာဖြစ်လို့ပါ။
          ဒါပေမယ့် အဲ့ဒီအသံလေးကတော့ Juice ပဲဖြစ်ပါတယ်။ သူက function အရ မလိုအပ်ပေမယ့် ရည်ရွယ်ချက်ရှိရှိ ထည့်သွင်းထားတာပါ -
        </p>

        <div className="img-container mb-4">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/mario.mp4" type="video/mp4" />
          </video>
        </div>

        <ul className="redundant-list">
          <li>Mario mushroom စားလိုက်ပြီဆိုတာကို ပိုပြီး ထင်ရှားအောင် အတည်ပြုပေးတယ် (reinforcing)၊</li>
          <li>ဒါက ကောင်းမွန်တဲ့ အရာတစ်ခုပါဆိုတာကို ခံစားရစေတယ် (positive feedback) နဲ့</li>
          <li>Player ကို ဆုလာဘ်အသေးစားလေး တစ်ခုပေးလိုက်သလိုမျိုး ဖြစ်စေပြီး နောက်ထပ် mushroom တွေ ထပ်ရှာချင်စိတ်ဖြစ်အောင် တိုက်တွန်းပေးတယ်။ တစ်နည်းအားဖြင့် ဂိမ်းကစားနည်းကို သင်ကြားပေးလိုက်တာပါပဲ။</li>
        </ul>

        {/* Quote 1 */}
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="myanmar-text">
              “'Juice' ဆိုတာ feedback တွေ အဆက်မပြတ်နဲ့ အပြည့်အဝ ရရှိနေဖို့ ကျွန်တော်တို့ အသုံးပြုခဲ့တဲ့ အသုံးအနှုန်းလေး တစ်ခုပါ။ juicy ဖြစ်တဲ့ element တစ်ခုက သင်ထိတွေ့လိုက်တဲ့အခါ တုန်ခါသွားတာ၊ လှုပ်ရှားသွားတာ ဒါမှမဟုတ် အသံထွက်လာတာမျိုးတွေ လုပ်ဆောင်ပေးပါတယ်။ ဒါက user ကို world ပေါ်မှာ ပိုပြီး စွမ်းအားရှိတယ်လို့ ခံစားရစေပြီး interaction တစ်ခုချင်းစီအပေါ်မှာ မူတည်ပြီး ဘယ်လိုရှိနေတယ်ဆိုတာကို အမြဲတမ်း feedback ပေးနေတာဖြစ်လို့ rule တွေကို နားလည်အောင် သင်ကြားပေးရာလည်း ရောက်ပါတယ်။”
            </blockquote>
            <div className="quote-footer">
              <span className="quote-author">Game Developer</span>
              <span className="quote-source">How to Prototype a Game in Under 7 Days</span>
            </div>
          </div>
        </div>

        <p>Juice က အောက်ပါအချက်တွေကို လုပ်ဆောင်ပေးနိုင်ပါတယ် -</p>
        <ul className="redundant-list">
          <li>သင်ကြားပေးနိုင်ခြင်း (teach)၊</li>
          <li>အရာဝတ္ထုတွေကို ပိုပြီး သက်ဝင်လှုပ်ရှားနေသကဲ့သို့ ခံစားရစေခြင်း (feel more alive)၊</li>
          <li>Responsiveness, impact ဒါမှမဟုတ် reward ခံစားချက်ကို မြှင့်တင်ပေးနိုင်ခြင်း၊</li>
          <li>လုပ်ဆောင်ချက် တစ်ခုကို စိတ်ကျေနပ်မှုပေးနိုင်ခြင်း (satisfying action) နဲ့</li>
          <li>Player ရဲ့ emotion connection ကို မြှင့်တင်ပေးပြီး ပိုမိုမှတ်မိလွယ်တဲ့ experience ဖြစ်စေခြင်း (emotions က memory ရဲ့ အခြေခံပဲဖြစ်ပါတယ်)။</li>
        </ul>

        <p>
          Juice ဆိုတာ အသေးစိတ် details လေးတွေအပေါ်မှာ အခြေခံတာပါ။
          အရာရာတိုင်းဆီကနေ အကျိုးရလဒ်တွေ ပိုပြီး ထွက်ပေါ်လာအောင် ကြိုးစားတာလည်း ဖြစ်ပါတယ်။
          ဒါဟာ user ရဲ့ functional needs တွေတင်မကဘဲ emotional needs တွေကိုပါ ဖြည့်ဆည်းပေးဖို့ ဖြစ်ပါတယ်။
          သူ့ကို games တွေမှာ စတင်အသုံးပြုခဲ့ကြပေမယ့် တခြား software အမျိုးအစားတွေမှာလည်း အသုံးပြုနိုင်ပါတယ်။
        </p>
      </section>

      {/* Game Feel */}
      <section id="game-feel">
        <h2>02. Game feel</h2>
        <p>
          Digital agent တစ်ခုကို ကိုင်တွယ်အသုံးပြုနေရတယ်ဆိုတဲ့ ခံစားချက်ကို Game Feel လို့ ဖော်ပြနိုင်ပါတယ်။
          Super Mario 64 မှာဆိုရင် player က Mario ကို လှုပ်ရှားစေရုံနဲ့တင် ပျော်ရွှင်မှုကို ခံစားရနိုင်ပါတယ်။
          အဓိက objective တွေ မပြီးသေးရင်တောင်ဖြစ်ပေါ်လာနိုင်တဲ့ ခံစားချက်မျိုးပါ။ ဘာကြောင့်လဲဆိုတော့ Mario ကို juice တွေ အပြည့်အဝ ထည့်သွင်းထားလို့ပါပဲ။
        </p>

        <p>
          လမ်းလျှောက်ရာကနေ တဖြည်းဖြည်း ပြေးလာတဲ့ ခံစားချက် (nuance)၊ ခုန်လိုက်တဲ့အခါ spring coil လိုမျိုး တုံ့ပြန်မှုနဲ့ ပေါက်ကွဲထွက်သွားတဲ့ အရှိန်အဟုန်၊
          လေထဲမှာရှိနေတုန်း ထွက်ပေါ်လာတဲ့ "ya-hoo" ဆိုတဲ့ အသံလေးတွေက Game Feel ကို ဖြစ်ပေါ်စေတာပါ။
          <strong> Game Feel က ဘာရည်ရွယ်ချက်မှမရှိဘဲ လုပ်ဆောင်လိုက်တဲ့ action တစ်ခုကနေ ပျော်ရွှင်မှုရတတ်တဲ့ လူသားတွေရဲ့ သဘာဝကို အမိအရ ဖမ်းဆုပ်လိုက်တာ ဖြစ်ပါတယ်။ </strong>
        </p>

        {/* The Obstacle Section */}
        <div id="the-obstacle">
          <Image
            src="/nintendoController.svg"
            alt="NES Controller"
            width={180}
            height={80}
            className="floating-img"
          />
          <h3>The obstacle (အဟန့်အတား)</h3>
          <p>
            User ကို တစ်ခုခု ခံစားရအောင် လုပ်ဆောင်ရာမှာ အကြီးမားဆုံး အဟန့်အတားတစ်ခုကတော့ သူတို့နဲ့ content ကြားမှာ ရှိနေတဲ့ screen မှန်ချပ်ပဲ ဖြစ်ပါတယ်။
            User က content ကို တိုက်ရိုက်ထိတွေ့လို့ မရပါဘူး။
          </p>
          <p className="clear-both">
            ဒါ့အပြင် <strong>ကျွန်တော်တို့က software နဲ့ ဆက်သွယ်တဲ့အခါ input device တွေ (controller, mouse, keyboard) ရဲ့ ကန့်သတ်ချက်တွေကြောင့် button press တွေ၊ mouse positions တွေနဲ့ joystick angles တွေလောက်ပဲ Vocabulary ရှိကြပါတယ်။ </strong>
            ဒါကို ကျော်လွှားဖို့ game developer တွေက redundant techniques တွေကို သုံးကြပါတယ်။
            ဥပမာ button press တစ်ခုကို acknowledge လုပ်ဖို့အတွက် animation, sound နဲ့ vibration တွေကို တစ်ပြိုင်နက်တည်း သုံးတာမျိုးပေါ့။
          </p>
        </div>

        <div className="highlight-box">
          <p>
            Non-game software တွေမှာတော့ Juice တွေ အလွန်အကျွံသုံးတာက မကောင်းတဲ့ ရလဒ်တွေ ဖြစ်စေနိုင်ပါတယ်။
            Games တွေမှာ Juice တွေ အများကြီး သုံးရတာက သူ့ရဲ့ ရည်ရွယ်ချက်က immersion (နစ်မြောသွားစေဖို့) ဖြစ်လို့ပါ။
            ဒါပေမယ့် non-game app တွေမှာတော့ task တစ်ခုကို မြန်မြန်ဆန်ဆန် ပြီးမြောက်ဖို့က ပိုအရေးကြီးတတ်ပါတယ်။
            Juice အနည်းငယ်က experience ကို ကောင်းမွန်စေနိုင်ပေမယ့် အများကြီးဖြစ်သွားရင်တော့ task ကို ပိုကြာသွားစေပြီး experience ကို ဆိုးသွားစေနိုင်ပါတယ်။
            <strong> Juice မထည့်ခင်မှာ ကိုယ့်ရဲ့ intended UX ကို အရင်ဆုံး နားလည်ထားဖို့ လိုအပ်ပါတယ်။ </strong>
          </p>
        </div>

        <h3>Priority (ဦးစားပေးမှု)</h3>
        <p>
          Non-game software တွေမှာ Confetti ပေါက်ကွဲတာမျိုးလိုမျိုး ရှားရှားပါးပါး ဖြစ်လေ့ရှိတဲ့ event တွေမှာပဲ juice ထည့်လေ့ရှိကြပါတယ်။
          ဒါပေမယ့် game developer တွေကတော့ moment to moment ဖြစ်ပေါ်နေတဲ့ အခြေခံ လုပ်ဆောင်ချက်တွေကိုပဲ ပိုပြီး focus လုပ်ကြပါတယ်။
          ဘာလို့လဲဆိုတော့ ဒါတွေဟာ software တစ်ခုလုံးရဲ့ အခြေခံ အုတ်မြစ်ဖြစ်လို့ပါပဲ။
        </p>
        <p>
          Steve Swink က Mario 64 မှာ player တစ်ယောက် အများဆုံး ဘာတွေလုပ်နေသလဲဆိုတာကို ခွဲခြမ်းစိတ်ဖြာပြထားပါတယ် -
        </p>
        <ul className="redundant-list">
          <li><strong>နာရီ ၂၀ ကျော်လောက်:</strong> ဂိမ်းပြီးအောင် ကစားတာ၊ Bowser ကို အနိုင်ယူတာ၊ stars ၁၂၀ လုံးရအောင် ယူတာ။</li>
          <li><strong>နာရီပိုင်း တစ်ကြိမ်လောက်:</strong> 'boss' battle တွေ ပြီးမြောက်တာ။</li>
          <li><strong>မိနစ် ၃၀ တစ်ကြိမ်လောက်:</strong> area အသစ်တွေ ဒါမှမဟုတ် painting အသစ်တွေဆီ ဝင်ခွင့်ရတာ။</li>
          <li><strong>၅ မိနစ် တစ်ကြိမ်လောက်:</strong> objective တစ်ခု ပြီးမြောက်တာ၊ star တစ်ခု ရတာ။</li>
          <li><strong>မိနစ်တိုင်း၊ စက္ကန့်တိုင်း (Moment to Moment):</strong> လမ်းလျှောက်တာ၊ ပြေးတာ၊ ခုန်တာ၊ acrobatics လုပ်တာ။</li>
        </ul>
        <div className="highlight-box">
          <p>
            <strong> Onboarding ပြီးမြောက်တာက ဂိမ်းတစ်ခုကို အနိုင်ရလိုက်တာနဲ့ တူပါတယ်။ တစ်ကြိမ်ပဲ ဖြစ်သွားတာပါ။ အဲ့ဒါကို juice ထည့်တာက overall experience အပေါ်မှာ သက်ရောက်မှု အနည်းငယ်ပဲ ရှိပါတယ်။ moment to moment ဖြစ်နေတဲ့ events တွေကို juice ထည့်တာက ပိုပြီး ထိရောက်မှု ရှိပါတယ်။ </strong>
          </p>
        </div>

        <h3>How to create game feel (Game feel ဖန်တီးနည်း)</h3>
        <p>
          Rahul Vohra က interface တွေကို ကစားစရာ toy အဖြစ် စတင်ပြီး design လုပ်ဖို့ အကြံပြုထားပါတယ်။ Toy ဆိုတာ -
          ပျော်စရာကောင်းတယ်၊ ဘာရည်ရွယ်ချက်မှ မရှိဘူး၊ ပျော်ရွှင်စွာ စူးစမ်းလေ့လာချင်စိတ်ကို ဖြစ်ပေါ်စေတယ်၊ ပြီးတော့ စိတ်ကျေနပ်ဖွယ် အံ့အားသင့်စေမယ့် moments လေးတွေလည်း ပါဝင်နေတတ်ပါတယ်။
        </p>
        <p>
          ကျွန်တော်တို့က toy နဲ့ ကစားတယ်၊ ဒါပေမယ့် game ကိုတော့ play (ကစား) တာပါ။ ဘောလုံးက toy ဖြစ်ပေမယ့် baseball ကတော့ game ပဲဖြစ်ပါတယ်။
          အကောင်းဆုံး ဂိမ်းတွေကို toy တွေနဲ့ပဲ တည်ဆောက်ထားတာပါ။ Mario ခံစားရတဲ့ ပုံစံဟာ ဂိမ်းရဲ့ အခြေခံအကျဆုံး အစိတ်အပိုင်း ဖြစ်ပါတယ်။
          ဒါကြောင့် level တွေ မဖန်တီးခင်မှာ <em>garden</em> ဆိုတဲ့ test environment တစ်ခုကို အရင်ဆုံး တည်ဆောက်ခဲ့ကြပါတယ်။
          Mario ဘယ်လို ခံစားရတယ်ဆိုတာကို test လုပ်ပြီး refine လုပ်နိုင်မယ့် playground တစ်ခုပေါ့။
          Web development မှာ ဆိုရင်တော့ ဒါဟာ <strong>Storybook</strong> နဲ့ တူပါတယ်။ Component တွေကို သီးခြား environment မှာ render လုပ်ပြီး သူတို့ရဲ့ feel ကို test လုပ်ကာ refine လုပ်နိုင်တာမို့လို့ပါ။
        </p>

        {/* Quote 2 */}
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="myanmar-text">
              “It's about maximum output for minimum input.”
            </blockquote>
            <div className="quote-footer">
              <span className="quote-author">Martin Jonasson & Petri Purho</span>
              <span className="quote-source">Juice it or lose it</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Requirements */}
      <section id="emotional-requirements">
        <h2>03. Emotional requirements</h2>
        <p>
          Habits app က user တွေကို အလေ့အကျင့်တွေ တည်ဆောက်နိုင်အောင် ကူညီပေးပါတယ်။
          Theory အရဆိုရင် အလုပ်တစ်ခုကို ရက်ပေါင်း ၆၆ ရက် ဆက်တိုက် လုပ်ဆောင်မယ်ဆိုရင် habit တစ်ခု ဖြစ်လာပါတယ်။
          User က သူလုပ်ချင်တဲ့ habit (ဥပမာ - စာဖတ်တာ) ကို ရိုက်ထည့်လိုက်ရင် နေ့တိုင်း checkbox တစ်ခုကို တွေ့ရမှာပါ။
          စာဖတ်ပြီးရင် သူတို့က အဲ့ဒီ checkbox ကို click လုပ်ရပါတယ်။
        </p>

        <div className="img-container mb-4">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/emotionalRequirement.mp4" type="video/mp4" />
          </video>
        </div>
        <p>
          ဒီနေရာမှာ standard checkbox နဲ့ juiced checkbox ကို နှိုင်းယှဉ်ကြည့်ပါ။
          Standard က functional requirements ကိုပဲ ဦးစားပေးပေမယ့် juiced ကတော့ emotional requirements ကိုပါ ထည့်သွင်း စဉ်းစားထားတာပါ။
          Juiced checkbox ကို ဖိထားလိုက်တဲ့အခါ 2D နဲ့ 3D animation တွေ، sound effects နဲ့ haptic feedback တွေက တစ်ပြိုင်နက်တည်း ပေါ်ထွက်လာပါတယ်။
          <strong> ဒါဟာ လုပ်ဆောင်ချက်ကို အသိအမှတ်ပြုလိုက်တာတင်မကဘဲ အဲ့ဒီ action က ကိုယ်စားပြုတဲ့ symbolic meaning ကိုပါ ဖော်ပြလိုက်တာ ဖြစ်ပါတယ်။ </strong>
          ဒီနေ့တော့ ငါအလုပ်ပြီးပြီ၊ habit တည်ဆောက်ဖို့ တစ်လှမ်း ပိုနီးလာပြီ ဆိုတဲ့ အသိက user အတွက် reward တစ်ခု ဖြစ်စေပြီး နောက်ထပ် လုပ်ဆောင်ချင်စိတ်ကိုလည်း မြှင့်တင်ပေးပါတယ်။
        </p>
      </section>

      {/* Soul */}
      <section id="soul">
        <h2>04. Soul</h2>
        <p>
          <strong>Emotional requirements ကို အပြည့်အဝ ဖြည့်ဆည်းပေးနိုင်တဲ့ အရာတစ်ခုကို soul (ဝိညာဉ်) ရှိတယ်လို့ ဖော်ပြနိုင်ပါတယ်။</strong>
        </p>

        {/* Quote 3 */}
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="myanmar-text">
              “သင်အကြိုက်ဆုံး ရပ်ကွက်ထဲက စားသောက်ဆိုင်လေးကို မြင်ယောင်ကြည့်လိုက်ပါ... အဲ့ဒီမှာ သဘာဝအလင်းရောင်တွေ အပြည့်အဝ ရရှိနေပြီး၊ လက်မှုထည် ထိုင်ခုံလေးတွေ၊ ဆိုင်တစ်ဆိုင်လုံးမှာ သစ်သားညိုရောင် အစင်းကြောင်းလေးတွေနဲ့ မျက်နှာကျက်ကနေ တွဲလောင်းကျနေတဲ့ ရောင်စုံအလှဆင်ပစ္စည်းလေးတွေ ရှိနေပါလိမ့်မယ်။ သင်ရော မြင်ယောင်လို့ရရဲ့လား? အဲ့ဒီနေရာရဲ့ နွေးထွေးမှုနဲ့ ဝိညာဉ် (spirit) ကို သင်ခံစားရလား?”
            </blockquote>
            <div className="quote-footer">
              <span className="quote-author">The Browser Company</span>
              <span className="quote-source">Building a better way to use the Internet</span>
            </div>
          </div>
        </div>

        <p>
          ဒါရဲ့ ဆန့်ကျင်ဘက်ကတော့ ဆေးရုံ ပါပဲ။ ဒါဟာ functional requirements တွေအတွက်ပဲ အကောင်းဆုံးဖြစ်အောင် (optimize) လုပ်ထားတဲ့အတွက်
          အေးစက်တယ်၊ ပိုးသတ်ထားတယ်၊ အရာရာက ရိုးရှင်းလွန်း (minimal) ပြီး ထူးခြားတဲ့လက္ခဏာ (character) နဲ့ ကိုယ်ပိုင်ဟန် (individuality) မရှိပါဘူး။ တစ်နည်းအားဖြင့် ဝိညာဉ်မဲ့ခြင်း (Soulless) ဖြစ်ပါတယ်။
        </p>

        <div className="grid-2">
          <div className="img-container">
            <Image src="/clifBar2007.jpg" alt="Clif Bar 2007" width={400} height={400} />
            <div className="img-caption">Clif Bar website in 2007</div>
          </div>
          <div className="img-container">
            <Image src="/clifBar2023.webp" alt="Clif Bar 2023" width={400} height={400} />
            <div className="img-caption">Clif Bar website in 2023</div>
          </div>
        </div>

        <div id="soulless-software">
          <h3>Soulless software</h3>
          <p>
            Juice က software တွေမှာ ဝိညာဉ် (soul) ရှိလာအောင် ဖြည့်ဆည်းပေးနိုင်ပေမဲ့၊ လက်တွေ့မှာတော့ software အတော်များများမှာ ဒါမျိုး ပါတာ နည်းလှပါတယ်။
            ဘာလို့လဲဆိုတော့ ခံစားချက်တွေ (feelings) ဟာ ကျွန်တော်တို့ ဘဝအပေါ်မှာ ဘယ်လောက်အထိ လွှမ်းမိုးမှု ရှိနေသလဲဆိုတာကို လျှော့တွက်ထားကြလို့ပါပဲ။
          </p>


          <p>
            <strong> Emotion ဟာ လူသားတစ်ယောက် ဖြစ်တည်မှုရဲ့ အဓိက အစိတ်အပိုင်း ဖြစ်ပါတယ်။ </strong>
            ဒါဟာ ကမ္ဘာတစ်ဝှမ်းက ယဉ်ကျေးမှုတိုင်းမှာ ဂီတတွေ ဘာလို့ ရှိနေရသလဲဆိုတဲ့ အကြောင်းပြချက် ဖြစ်သလို၊
            လူသားမျိုးနွယ်ရဲ့ အကြီးကျယ်ဆုံးသော လက်ရာတွေဟာ artworks တွေ ဘာလို့ ဖြစ်နေရသလဲဆိုတဲ့ အကြောင်းပြချက်လည်း ဖြစ်ပါတယ်။
            သူတို့ရဲ့ function ကြောင့် မဟုတ်ဘဲ ကျွန်တော်တို့ကို ဘယ်လို ခံစားရစေသလဲ ဆိုတာပေါ်မှာပဲ အခြေခံထားတာ ဖြစ်ပါတယ်။
          </p>
        </div>

        <h3>How to create soul (Soul ဖန်တီးနည်း)</h3>
        <div className="img-container mb-4">
          <Image src="/disneyAnimation.webp" alt="Disney Animation" width={200} height={120} />
        </div>
        <p>
          Software တစ်ခုမှာ soul ပါဝင်လာဖို့အတွက် သင့်ကိုယ်သင် အရင်ဆုံး မေးကြည့်ပါ - user ကို ဘယ်လိုမျိုး ခံစားစေချင်သလဲ?
          Inspiration တွေကို software industry အပြင်ဘက်မှာ ရှာဖွေပါ။ သင့်ကို တစ်ခုခု ခံစားရအောင် လုပ်နိုင်တဲ့ အရာကို ရှာဖွေပြီး ဘာကြောင့်လဲဆိုတာကို ကိုယ့်ကိုယ်ကို မေးပါ။ ပြီးရင် ဒါကို အသုံးပြုပြီး သင့်ရဲ့ အလုပ်တွေကို ပြုပြင် ဖန်တီးပါ။
        </p>

        <p>
          ကမ္ဘာ့ အတော်ဆုံး crafters တွေက အရာရာကို neutral ဖြစ်နေအောင် မလုပ်ကြပါဘူး။
          သူတို့ဟာ ခံစားချက်၊ အမြင်၊ အတွေ့အကြုံ၊ ကိုယ်ပိုင်အကြိုက် (taste) နဲ့ ပုဂ္ဂလဓိဋ္ဌာန် (subjectivity) တွေအပေါ်မှာပဲ အခြေခံပြီး ဖန်တီးကြပါတယ်။
          ဒါကြောင့် သူတို့ရဲ့ အလုပ်တွေမှာ လူသားတွေရဲ့ လက်ရာ (hand-crafted touches) တွေ ပါဝင်နေလေ့ ရှိပါတယ်။
          Steve Jobs ဆိုရင် Zen Buddhism နဲ့ calligraphy ဆီကနေ influence ယူခဲ့ပါတယ်။
        </p>

        {/* Quote 4 */}
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="myanmar-text">
              “Apple Notes ကို သုံးတဲ့အခါ minimalist တစ်ယောက်လို ခံစားရတယ်။ Notion ကို သုံးတဲ့အခါမှာတော့ productivity nerd တစ်ယောက်လို ခံစားရပြီး၊ Obsidian ကို သုံးတဲ့အခါမှာတော့ intellectual indie hacker တစ်ယောက်လို ခံစားရပါတယ်။”
            </blockquote>
            <div className="quote-footer">
              <span className="quote-author">Valerie Tetu</span>
              <span className="quote-source">Founder</span>
            </div>
          </div>
        </div>

        <div className="img-container mb-4">
          <Image src="/emotionWheelLarge.webp" alt="Emotion Wheel" width={400} height={400} className="w-full" />
        </div>
        <p>
          Superhuman email client ရဲ့ designer တွေက <strong>human emotions model</strong> ကို သုံးကြပါတယ်။
          ဒီ model အရ screen အမျိုးမျိုး ဒါမှမဟုတ် triggered events တွေအပေါ် မူတည်ပြီး user ဆီမှာ emotional states တွေ မတူညီအောင် ဖန်တီးပေးပါတယ်။
          ဥပမာ user က Inbox Zero ရောက်သွားတဲ့အခါ stunning imagery တွေကို ပြသပြီး surprise ဖြစ်စေတာမျိုးပေါ့။
          ဒီ Model က designer တွေကို သူတို့ ဘာကို ဦးတည်ပြီး ဖန်တီးရမလဲဆိုတာကို တိတိကျကျ သိစေဖို့ ကူညီပေးပါတယ်။
        </p>
        <div className="img-container mb-4">
          <Image src="/superhuman.webp" alt="Superhuman Interface" width={300} height={150} className="w-full" />
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2>05. Examples</h2>

        <div>
          <h3>D&D Beyond Dice Roll</h3>
          <div className="img-container">
            <video className="w-full rounded-lg" controls playsInline preload="auto">
              <source src="/dnd.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mt-4 mb-8">
            D&D Beyond က dice roll feature မှာ 3D animation တွေ သုံးထားပါတယ်။
            လင်းစက်မှု၊ physics နဲ့ sound effects တွေက တကယ့် စားပွဲပေါ်မှာ အန်စာတုံး လှိမ့်နေသလိုမျိုး ခံစားချက်ကို ပေးနိုင်တဲ့အတွက် immersion ကို အပြည့်အဝ ပေးနိုင်ပါတယ်။
          </p>
        </div>

        <h3>Firewatch Website</h3>
        <div className="img-container">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/firewatch.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-4 mb-8">
          Firewatch website က scroll လုပ်တဲ့နေရာမှာ <strong>parallax effect</strong> ကို သုံးထားပါတယ်။
          Wilderness ထဲကို တဖြည်းဖြည်း တိုးဝင်သွားတဲ့ ခံစားချက်မျိုးကို ပေးနိုင်ပြီး content နဲ့လည်း လိုက်ဖက်မှု ရှိလှပါတယ်။
        </p>

        <h3>Onboarding Juice</h3>
        <div className="img-container mb-8">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/onboarding.mp4" type="video/mp4" />
          </video>
        </div>

        <h3>Tweening & FLIP</h3>
        <div className="img-container">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/flip.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-4 mb-8">
          <strong>FLIP</strong> (First, Last, Invert, Play) animation technique က page transitions တွေကို ပိုပြီး intuitive ဖြစ်စေသလို cognitive load ကိုလည်း လျှော့ချပေးပါတယ်။
          User အနေနဲ့ UI ရဲ့ အပြောင်းအလဲကို process လုပ်ဖို့ အချိန်ရစေပြီး တကယ့် real world က အရာဝတ္ထုတွေ ရွေ့လျားသလိုမျိုး ခံစားချက်ကို ပေးပါတယ်။
        </p>

        <h3>Call of Duty Loading Tip</h3>
        <div className="img-container">
          <Image src="/callOfDutyLoadingScreen.jpg" alt="Call of Duty Loading Screen" width={800} height={450} className="w-full" />
        </div>
        <p className="mt-4 mb-8">
          <strong>Call of Duty</strong> လို complex mechanics တွေပါတဲ့ ဂိမ်းတွေမှာဆိုရင် တိုက်ရိုက် onboarding လုပ်မယ့်အစား loading screen တွေမှာ ကစားနည်း tip လေးတွေ ပြသပြီး non-intrusive ways နဲ့ သင်ကြားပေးလေ့ ရှိပါတယ်။
        </p>

        <h3>Half-Life Scripted Sequence</h3>
        <div className="img-container">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/halfLife.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-4 mb-8">
          <strong>Half-Life</strong> မှာဆိုရင်လည်း scripted sequences တွေကို သုံးပြီး tension တိုးအောင်၊ world က player ကို အသိအမှတ်ပြုနေတယ် (acknowledge) လို့ ထင်ရအောင် ပြုလုပ်ထားပါတယ်။
        </p>

        {/* Quote 5 */}
        <div className="quote-container">
          <div className="quote-content">
            <blockquote className="myanmar-text">
              “နောက်ဆုံး ယူဆချက်တစ်ခုကတော့ player တွေဟာ သူတို့ရဲ့ ကျရှုံးမှုအတွက် သူတို့ကိုယ်သူတို့ပဲ အမြဲအပြစ်တင်သင့်တယ် ဆိုတာပါပဲ။ အကယ်၍ ဂိမ်းက ဘာသတိပေးချက်မှမပေးဘဲ သူတို့ကို သတ်လိုက်မယ်ဆိုရင် player တွေက ဂိမ်းကိုပဲ အပြစ်တင်ကြပြီး အဲ့ဒီဂိမ်းကို မကြိုက်တော့တာမျိုး ဖြစ်လာပါလိမ့်မယ်။ ဒါပေမယ့် အကယ်၍ ဂိမ်းက အန္တရာယ်ရှိနေပြီဆိုတာကို အရိပ်အယောင်ပြထားပြီး လွတ်မြောက်နိုင်မယ့် နည်းလမ်းကိုပါ ပြသထားလျက်နဲ့ သူတို့ သေသွားခဲ့မယ်ဆိုရင်တော့ ဒါဟာ သူတို့ရဲ့ အမှားလို့ပဲ သတ်မှတ်ကြပါလိမ့်မယ်... သူတို့ အောင်မြင်သွားတဲ့အခါမှာတော့ ဂိမ်းက သူတို့အတွက် ဆုလာဘ်အသေးစားလေးတွေ (scripted sequence, special effect စသဖြင့်) ပေးလိုက်မယ်ဆိုရင် သူတို့က သူတို့ကိုယ်သူတို့ရော ဂိမ်းအပေါ်မှာပါ စိတ်ကျေနပ်မှု ရှိသွားကြပါလိမ့်မယ်။”
            </blockquote>
            <div className="quote-footer">
              <span className="quote-author">Ken Birdwell</span>
              <span className="quote-source">One of Valve's first employees</span>
            </div>
          </div>
        </div>

        <div className="img-container mt-8">
          <video className="w-full rounded-lg" controls playsInline preload="auto">
            <source src="/gameOfThrones.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="mt-4 mb-8">
          <strong>Game of Thrones</strong> ရဲ့ intro မှာဆိုရင် geography တွေကို map နဲ့တကွ ဖော်ပြပေးတာက viewers တွေအတွက် character တွေ၊ နေရာတွေကို ပိုပြီး မှတ်မိလွယ်စေပါတယ်။
        </p>

        <div className="img-container mt-8">
          <Image src="/amazonPrimeVideo.jpg" alt="Amazon Prime Screen" width={600} height={300} className="w-full" />
        </div>
        <p className="mt-4">
          <strong>Amazon Prime Video</strong> ရဲ့ pause screen မှာ လက်ရှိ scene ထဲက actor တွေရဲ့ info ပါဝင်တာကလည်း user engagement ကို ပိုပြီး မြှင့်တင်ပေးနိုင်တဲ့ juice တစ်ခုပါပဲ။
        </p>
      </section>

      {/* References */}
      <section id="references">
        <h2>06. References</h2>
        <ul className="redundant-list">
          <li><strong><a href="https://garden.bradwoods.io/notes/design/juice" target="_blank" rel="noopener noreferrer">Brad Woods - Juice (မူရင်း)</a></strong></li>
          <li><a href="https://www.designspells.com/" target="_blank" rel="noopener noreferrer">Design Spells - Micro-interactions, easter eggs, and other seemingly extra design details</a></li>
          <li><a href="https://www.gamedeveloper.com/design/game-feel-the-secret-ingredient" target="_blank" rel="noopener noreferrer">Game Feel: The Secret Ingredient</a></li>
          <li><a href="https://www.gamedeveloper.com/disciplines/how-to-prototype-a-game-in-under-7-days" target="_blank" rel="noopener noreferrer">How to Prototype a Game in Under 7 Days</a></li>
          <li><a href="https://blog.superhuman.com/game-design-not-gamification/" target="_blank" rel="noopener noreferrer">How to build great products with game design, not gamification</a></li>
          <li><a href="https://www.youtube.com/watch?v=Fy0aCDmgnxg" target="_blank" rel="noopener noreferrer">Juice it or lose it</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          မူရင်း - <a href="https://garden.bradwoods.io/notes/design/juice" target="_blank" rel="noopener noreferrer">Brad Woods</a>
        </p>
        <p>
          ဘာသာပြန်ဆိုသူ - Chan Nyein Tun
        </p>
      </footer>
    </main>
  );
}
