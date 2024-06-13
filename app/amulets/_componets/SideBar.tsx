"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SideBar = () => {
  type Rarity = {
    legendary: boolean;
    epic: boolean;
    rare: boolean;
    common: boolean;
  };
  type Type = {
    normal: boolean;
    another: boolean;
  };
  type Element = {
    fire: boolean;
    nature: boolean;
    water: boolean;
    earth: boolean;
    thunder: boolean;
    poisen: boolean;
  };
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState<Rarity>({
    legendary: false,
    epic: false,
    rare: false,
    common: false,
  });
  const [type, setType] = useState<Type>({
    normal: false,
    another: false,
  });
  const [element, setElement] = useState<Element>({
    fire: false,
    nature: false,
    water: false,
    earth: false,
    thunder: false,
    poisen: false,
  });
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  const changeHandler = (rarity: Rarity) => {
    setRarity((rarity) => ({ ...rarity, legendary: true }));
  };

  return (
    <div className="lg:sticky lg:h-[calc(100vh-64px)] w-full lg:w-48 bg-gray-400 top-16">
      <div className="p-4">
        {/* アミュレット名 */}
        <div className="flex mb-4">
          <Input
            id="name"
            placeholder="アミュレット名"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>レアリティ</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 mb-4">
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="legendary"
                    checked={rarity.legendary}
                    onCheckedChange={() =>
                      setRarity((rarity) => ({
                        ...rarity,
                        legendary: !rarity.legendary,
                      }))
                    }
                  />
                  <Label htmlFor="legendary">LEGENDARY</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="epic"
                    checked={rarity.epic}
                    onCheckedChange={() =>
                      setRarity((rarity) => ({ ...rarity, epic: !rarity.epic }))
                    }
                  />
                  <Label htmlFor="epic">EPIC</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="rare"
                    checked={rarity.rare}
                    onCheckedChange={() =>
                      setRarity((rarity) => ({ ...rarity, rare: !rarity.rare }))
                    }
                  />
                  <Label htmlFor="rare">RARE</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="common"
                    checked={rarity.common}
                    onCheckedChange={() =>
                      setRarity((rarity) => ({
                        ...rarity,
                        common: !rarity.common,
                      }))
                    }
                  />
                  <Label htmlFor="common">COMMON</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>タイプ</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 mb-4">
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="normal"
                    checked={type.normal}
                    onCheckedChange={() =>
                      setType((type) => ({ ...type, normal: !type.normal }))
                    }
                  />
                  <Label htmlFor="normal">NORMAL</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="another"
                    checked={type.another}
                    onCheckedChange={() =>
                      setType((type) => ({ ...type, another: !type.another }))
                    }
                  />
                  <Label htmlFor="another">ANOTHER</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>属性</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 mb-4">
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="fire"
                    checked={element.fire}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        fire: !element.fire,
                      }))
                    }
                  />
                  <Label htmlFor="fire">FIRE</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="nature"
                    checked={element.nature}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        nature: !element.nature,
                      }))
                    }
                  />
                  <Label htmlFor="nature">NATURE</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="water"
                    checked={element.water}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        water: !element.water,
                      }))
                    }
                  />
                  <Label htmlFor="water">WATER</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="earth"
                    checked={element.earth}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        earth: !element.earth,
                      }))
                    }
                  />
                  <Label htmlFor="earth">EARTH</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="thunder"
                    checked={element.thunder}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        thunder: !element.thunder,
                      }))
                    }
                  />
                  <Label htmlFor="thunder">THUNDER</Label>
                </div>
                <div className="flex space-x-2 items-center">
                  <Checkbox
                    id="poisen"
                    checked={element.poisen}
                    onCheckedChange={() =>
                      setElement((element) => ({
                        ...element,
                        poisen: !element.poisen,
                      }))
                    }
                  />
                  <Label htmlFor="poisen">POISEN</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SideBar;
