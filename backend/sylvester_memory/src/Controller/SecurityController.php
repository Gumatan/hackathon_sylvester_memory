<?php

namespace App\Controller;

use App\Entity\TrueUser;
use App\Form\RegistrationFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/security", name="security")
     */
    public function index()
    {
        return $this->render('security/index.html.twig', [
            'controller_name' => 'SecurityController',
        ]);
    }

    /**
     * @Route("/register", name="app_register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $trueUser = new TrueUser();
        $form = $this->createForm(RegistrationFormType::class, $trueUser);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $trueUser->setPassword(
                $passwordEncoder->encodePassword(
                    $trueUser,
                    $form->get('password')->getData()
                )
            );
            $trueUser->setRoles(['ROLE_USER']);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($trueUser);
            $entityManager->flush();

            // do anything else you need here, like send an email

            return $this->redirectToRoute('');
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }

}
