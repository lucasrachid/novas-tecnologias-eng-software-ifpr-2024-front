"use client"
import HttpService from '@/app/services/httpService';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function About() {
    const About = () => {
        const [projectInfo, setProjectInfo] = useState(null);

        useEffect(() => {
            const fetchProjectInfo = async () => {
                const httpService = new HttpService();

                try {
                    const data = await httpService.get('');

                    setProjectInfo(data);
                } catch (error) {
                    console.error('Erro ao buscar informações do projeto:', error);
                }
            };

            fetchProjectInfo();
        }, []);
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
                    <p className="text-lg leading-relaxed">
                        Aqui você pode escrever um texto explicando o seu projeto. Utilize este espaço
                        para descrever o propósito, as funcionalidades principais, e qualquer outro detalhe
                        relevante que você queira compartilhar.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Outra Seção do Projeto</h2>
                    <p className="text-lg leading-relaxed">
                        Esta é outra seção onde você pode adicionar mais informações sobre o seu projeto.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-bold mb-4">Imagem do Projeto</h2>
                    <div className="w-full h-auto">
                        <Image
                            src="/assets/imgs/diagrama-de-classe.png"
                            alt="Imagem do projeto"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}