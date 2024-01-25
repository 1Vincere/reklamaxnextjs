"use client"
import React, { useEffect } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.h1}>Як це працюе?</h1>
            <div className={styles.info}>
                <div className={styles.block1}>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor?</p>
                </div>
                <div className={styles.block2}>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor?</p>
                </div>
                <div className={styles.block3}>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor?</p>
                </div>
                <div className={styles.block4}>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor?</p>
                </div>
                <div className={styles.block5}>
                    <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolor?</p>
                </div>
                <div className={styles.line}></div>
            </div>
            <p className={styles.p}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe hic commodi, quam quisquam adipisci asperiores rem perferendis ea deserunt dicta 
            quasi veritatis incidunt modi earum libero? Ut, cum beatae maiores nihil explicabo aliquam quas possimus fugit quis error sequi quia, mollitia nobis 
            aut esse alias, voluptatibus accusantium dignissimos? Reprehenderit quia praesentium repellat, doloribus error eum deserunt odit rem nisi voluptatum. 
            Possimus quisquam dolor, repellendus impedit voluptatem consequuntur eos debitis illo aut deserunt minima, quas earum tempora, hic voluptatibus reprehenderit! 
            Iusto fugiat omnis praesentium nesciunt facere aliquam ab iure, repudiandae distinctio dignissimos esse repellendus saepe deleniti molestias, quos eos. Quia.
            </p>
            <div className={styles.test}>
                <Link href="/news" passHref legacyBehavior>
                <a className={styles.btn}> Вперед! </a>
                </Link>
            </div>
        </div>
    );
}

export default About;



{/* <p className={styles.p}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe hic commodi, quam quisquam adipisci asperiores rem perferendis ea deserunt dicta 
            quasi veritatis incidunt modi earum libero? Ut, cum beatae maiores nihil explicabo aliquam quas possimus fugit quis error sequi quia, mollitia nobis 
            aut esse alias, voluptatibus accusantium dignissimos? Reprehenderit quia praesentium repellat, doloribus error eum deserunt odit rem nisi voluptatum. 
            Possimus quisquam dolor, repellendus impedit voluptatem consequuntur eos debitis illo aut deserunt minima, quas earum tempora, hic voluptatibus reprehenderit! 
            Iusto fugiat omnis praesentium nesciunt facere aliquam ab iure, repudiandae distinctio dignissimos esse repellendus saepe deleniti molestias, quos eos. Quia.
            </p> */}