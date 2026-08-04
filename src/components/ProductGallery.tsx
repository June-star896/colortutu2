"use client";
import Image from "next/image";
import {useState} from "react";
import styles from "./ProductPage.module.css";
export function ProductGallery({images,alts}:{images:string[];alts:string[]}){const [selected,setSelected]=useState(0);return <div className={styles.gallery}><div className={styles.thumbs} role="tablist" aria-label="Product images">{images.map((src,i)=><button key={src} type="button" role="tab" className={i===selected?styles.activeThumb:""} onClick={()=>setSelected(i)} aria-selected={i===selected}><Image src={src} alt="" fill sizes="86px"/></button>)}</div><div className={styles.mainImage}><Image key={images[selected]} src={images[selected]} alt={alts[selected]} fill priority sizes="(max-width: 800px) 100vw, 52vw"/></div></div>}
