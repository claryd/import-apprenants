import { ImportApprenantService } from "./business/import-apprenant.service";
import { ImportError } from "./errors/import-error";
import { ApprenantFieldNamesMapping } from "./interfaces/apprenant-field-names-mapping.interface";
import { importValidApprenantListWithInvalidMapping, importInvalidApprenantListWithValidMapping, importValidApprenantListWithValidMapping } from "./mocks/apprenant-list.mock";

/**
 * Script d'import d'apprenants avec exemples d'import de données
 * Entrées mockées : liste d'apprenants, mapping des champs
*/

// Liste d'apprenants valide avec mapping invalide (champ manquant)
const { invalidApprenantList, validApprenantFieldsMapping } = importInvalidApprenantListWithValidMapping();

importApprenantList(invalidApprenantList, validApprenantFieldsMapping);

// Liste d'apprenants invalide (champs manquants, type non valide) avec mapping valide
const { validApprenantList, invalidApprenantFieldsMapping } = importValidApprenantListWithInvalidMapping();

importApprenantList(validApprenantList, invalidApprenantFieldsMapping as ApprenantFieldNamesMapping);

// Liste d'apprenants valide avec mapping valide
const { validApprenantList: validApprenantList2, validApprenantFieldsMapping: validApprenantFieldsMapping2  } = importValidApprenantListWithValidMapping();
importApprenantList(validApprenantList2, validApprenantFieldsMapping2);

// Liste d'apprenants vide avec mapping valide
importApprenantList([], validApprenantFieldsMapping);


function importApprenantList(
    apprenantList: unknown[],
    apprenantFieldsMappingValid: ApprenantFieldNamesMapping
) {
    console.log('[Import Apprenant] ...starting new import');
    console.log(`[Import Apprenant] ...${ apprenantList.length } apprenants to import`);

    const importApprenantService = new ImportApprenantService();

    try {
        const { validRowList, invalidRowList } = importApprenantService.importData(apprenantList, apprenantFieldsMappingValid);

        console.log(`[Import Apprenant] ${ validRowList.length } apprenants successfully imported`);
        console.error(`[Import Apprenant] ${ invalidRowList.length } apprenants could not been imported...`);
    
        invalidRowList.forEach((invalidRow) => {
            console.error(`[Import Apprenant] Could not import row ${invalidRow.index} because field ${invalidRow.causeList.map((cause) => `${cause.field} has ${cause.cause}`).join(', ')}`);
        });

    } catch (error) {

        if (error instanceof ImportError) {
            console.error('[Import Apprenant][ERROR]', error.message);
        } else {
            throw error;
        }
    }

  
}