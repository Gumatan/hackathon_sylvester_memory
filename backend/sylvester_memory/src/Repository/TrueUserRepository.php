<?php

namespace App\Repository;

use App\Entity\TrueUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method TrueUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method TrueUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method TrueUser[]    findAll()
 * @method TrueUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrueUserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TrueUser::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $TrueUser, string $newEncodedPassword): void
    {
        if (!$TrueUser instanceof TrueUser) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($TrueUser)));
        }

        $TrueUser->setPassword($newEncodedPassword);
        $this->_em->persist($TrueUser);
        $this->_em->flush();
    }

    // /**
    //  * @return TrueUser[] Returns an array of TrueUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TrueUser
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
