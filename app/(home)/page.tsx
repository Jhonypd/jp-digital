/** @format */

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Location from "../main/Location";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  // const [notificationStatus, setNotificationStatus] = useState<
  //   null | string | undefined | Function
  // >(null);
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
          className="py-20 px-8 flex md:flex-row flex-col gap-4 w-full relative">
          <div className="w-full h-64 relative pt-4">
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
            <p className="py-4 text-[#595959] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s.
            </p>
            <Button
              onClick={notificationVerification}
              variant={"outline"}
              className="w-52 text-lg text-[#0074ff]">
              Ativar Notificações
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6 mb-[4.5rem]">
        <Location />
      </div>
    </div>
  );
}
