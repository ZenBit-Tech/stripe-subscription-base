import Stripe from 'stripe';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column()
  password: string;

  @Column()
  public stripeCustomerId: string;

  @Column({ default: false })
  trialUsed: boolean;

  @Column({ nullable: true })
  subscriptionStatus: Stripe.Subscription.Status;

  @Column({ nullable: true })
  current_period_end: number;

  @Column({ nullable: true })
  cancel_at_period_end: boolean;
}
