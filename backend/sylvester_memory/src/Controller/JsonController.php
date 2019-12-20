<?php

namespace App\Controller;

use App\Repository\IngredientsRepository;
use App\Repository\RecipesRepository;
use App\Repository\TrueUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class JsonController extends AbstractController
{
    /**
     * @Route("/json", name="json")
     */
    public function index(TrueUserRepository $trueUserRepository, SerializerInterface $serializer, RecipesRepository $recipesRepository, IngredientsRepository $ingredientsRepository): Response
    {


        $users = $trueUserRepository->findAll();

        $jsonUsers = [];

        foreach($users as $user) {
            $jsonUsers [] = $user->getpseudo();
        }


        $recipes = $recipesRepository->findAll();

        $jsonRecipes = [];

        foreach($recipes as $recipe) {
            $jsonRecipes [] = $recipe->getName();


        };

        $ingredients = $ingredientsRepository->findAll();

        $jsonIngredients = [];

        foreach($ingredients as $ingredient) {
            $jsonIngredients [] = $ingredient->getNameIngredient();
        }




        // echo  $serializer->serialize($users, 'json');

        return $this->json([$jsonUsers, $jsonRecipes, $jsonIngredients]);
    }






}
