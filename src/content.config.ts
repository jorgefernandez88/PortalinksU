import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const groupsCollection = defineCollection({
  // Astro 6 resuelve 'src/content/groups' de forma nativa desde la raíz del proyecto
  loader: glob({ pattern: '**/*.md', base: 'src/content/groups' }),
  schema: z.object({
    nombre: z.string(),
    descripcion_corta: z.string().optional(),
    categoria: z.enum(['academico', 'general', 'sedes']).optional(),
    cursos: z.array(
      z.object({
        nombre: z.string(),
        codigo: z.string().optional(),
        enlace: z.string()
      })
    ).optional(),
    enlaces: z.array(
      z.object({
        nombre: z.string(),
        descripcion: z.string().optional(),
        enlace: z.string(),
        icono: z.string().optional()
      })
    ).optional()
  })
});

export const collections = {
  groups: groupsCollection
};