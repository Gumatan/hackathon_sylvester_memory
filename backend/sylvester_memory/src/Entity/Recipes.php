<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RecipesRepository")
 */
class Recipes
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Ingredients", inversedBy="recipes")
     */
    private $ingredients;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\TrueUser", mappedBy="recipes")
     */
    private $trueUsers;

    /**
     * @ORM\Column(type="text")
     */
    private $pictures;

    public function __construct()
    {
        $this->ingredients = new ArrayCollection();
        $this->trueUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }


    /**
     * @return Collection|Ingredients[]
     */
    public function getIngredients(): Collection
    {
        return $this->ingredients;
    }

    public function addIngredient(Ingredients $ingredient): self
    {
        if (!$this->ingredients->contains($ingredient)) {
            $this->ingredients[] = $ingredient;
        }

        return $this;
    }

    public function removeIngredient(Ingredients $ingredient): self
    {
        if ($this->ingredients->contains($ingredient)) {
            $this->ingredients->removeElement($ingredient);
        }

        return $this;
    }

    /**
     * @return Collection|TrueUser[]
     */
    public function getTrueUsers(): Collection
    {
        return $this->trueUsers;
    }

    public function addTrueUser(TrueUser $trueUser): self
    {
        if (!$this->trueUsers->contains($trueUser)) {
            $this->trueUsers[] = $trueUser;
            $trueUser->addRecipe($this);
        }

        return $this;
    }

    public function removeTrueUser(TrueUser $trueUser): self
    {
        if ($this->trueUsers->contains($trueUser)) {
            $this->trueUsers->removeElement($trueUser);
            $trueUser->removeRecipe($this);
        }

        return $this;
    }

    public function getPictures(): ?string
    {
        return $this->pictures;
    }

    public function setPictures(string $pictures): self
    {
        $this->pictures = $pictures;

        return $this;
    }

}
