import { Heart, Pen } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-20 px-4 gradient-romantic">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 animate-fade-in-up">
          {/* <Pen className="w-8 h-8 text-accent mx-auto mb-4" /> */}
          <h2 className="text-5xl md:text-6xl text-script text-foreground mb-4">
            A Letter For You
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden">
          {/* Decorative corner hearts */}
          <Heart className="absolute top-4 right-4 w-6 h-6 text-primary/20 fill-primary/20" />
          <Heart className="absolute bottom-4 left-4 w-6 h-6 text-primary/20 fill-primary/20" />

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-light">
            <p className="text-2xl text-script text-foreground">My Beloved,</p>

            <p>
              Selamat ulang tahun, sayang. Aku masih ingat saat edutrip ke Malaysia, 
              itulah pertama kali aku bertemu dan berbincang denganmu. Entah kenapa, 
              sejak hari itu semuanya terasa sedikit berbeda.
            </p>

            <p>
              Dari obrolan sederhana, tawa kecil, hingga akhirnya tumbuh rasa yang tak 
              pernah aku rencanakan. Hubungan kita pun semakin dekat seiring berjalannya waktu.
            </p>

            <p>
              Waktu berjalan, kita belajar saling mengenal—kekurangan, kelebihan, ego, 
              dan sabar. Ada hari-hari bahagia, ada juga saat lelah, tapi bersamamu aku 
              belajar bahwa cinta bukan hanya tentang rasa, melainkan tentang bertahan 
              dan tumbuh bersama.
            </p>

            <p>
              Di hari istimewamu ini, aku tidak menjanjikan kesempurnaan. Aku hanya ingin 
              terus ada, menemani langkahmu, mendukung mimpimu, dan berjalan di sampingmu 
              pelan tapi pasti.
            </p>

            <p>
              Terima kasih sudah hadir dalam hidupku dan menjadi alasan aku tersenyum 
              tanpa alasan. Semoga tahun ini membawa kebahagiaan, kesehatan, dan segala 
              hal baik yang pantas kamu dapatkan.
            </p>


            <div className="pt-6 text-right">
              <p className="text-2xl text-script text-foreground">Forever Yours,</p>
              <div className="flex items-center justify-end gap-2 mt-2">
                <Heart className="w-5 h-5 text-primary fill-primary" />
                <span className="text-primary font-medium">Aii</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
