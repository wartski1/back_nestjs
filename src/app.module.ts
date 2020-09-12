import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProfileModule } from './profile/profile.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USER,
      password: process.env.PASS,
      database: process.env.DATABASE,
      entities: ["src/**/**.entity{.ts,.js}"],
      synchronize: true,
    }),
    ArticleModule,
    UserModule,
    ProfileModule,
    TagModule,
  ],
  controllers: [
    AppController
  ],
  providers: []
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
