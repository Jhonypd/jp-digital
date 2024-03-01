/** @format */

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import Location from "../main/Location";
import Services from "../main/Services";
import Segments from "../main/Segments";

export default function Home() {
 
  const { toast } = useToast();

  const notificationVerification = () => {
    if (!("Notification" in window)) {
      toast({
        title: "Atenção!",
        description: "Seu navegador não suporta notificações",
      });
    } else if (Notification.permission === "granted") {
      const notify = new Notification("Olá, bem vindo(a) novamente!");
      toast({
        title: "Noticação já está ativada",
        description: `${notify.title}`,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          const notify = new Notification("Olá, bem vindo(a)!");
          toast({
            title: "Noticação ativada",
            description: `${notify.title}`,
          });
        }
      });
    }
  };

  return (
    <div>
      <Card className="min-w-full max-w-full pt-24 border-0 shadow-none">
        <CardContent
          id="home"
          className="md:py-10 py-20 px-8 flex md:flex-row flex-col gap-4 w-full relative">
          <div className="w-full md:h-96 h-64 relative pt-4">
            <Image
              src={"/image-hero.png"}
              alt={"Image home"}
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>
          <div className="w-full flex flex-col">
            <h2 className="font-bold text-4xl pt-4">Transformação digital</h2>
            <p className="py-4 text-[#595959] font-normal text-left">
              A Transformação Digital está revolucionando a forma como os negócios operam
              e se relacionam com seus clientes. Ela envolve a integração de tecnologias
              digitais em todos os aspectos de uma organização, desde processos internos
              até a experiência do cliente, com o objetivo de melhorar a eficiência,
              inovação e competitividade. Estamos aqui para ajudá-lo a navegar nessa
              jornada de transformação digital, tornando sua empresa mais ágil, conectada
              e preparada para o futuro.
            </p>
            <Button
              onClick={notificationVerification}
              variant={"outline"}
              className="w-52 text-lg text-[#0074ff] mt-4">
              Ativar Notificações
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 mb-[4.5rem]">
        <Location />
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <Services />
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <Segments />
      </div>
    </div>
  );
}
