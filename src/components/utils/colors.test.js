import { getClosestColorName } from "./colors";
import { describe, test, expect } from "vitest";

describe("Comprobar la funcion getClosestColorName", () => {
  
    test("se le pasa el color amarillo #ffff30 y devuelve el color amarillo", () => {
        const color = "#ffff30";
        const name = "Amarillo";
        const result = getClosestColorName(color);
        
        expect(result).toBe(name);
    });

     test("se le pasa el color rojo #ff0000 y devuelve el color rojo", () => {
         const color = "#ff0000";
         const name = "Rojo";
         const result = getClosestColorName(color);
        
         expect(result).toBe(name);
     });
    
    
  });
 