import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from '../../enviroments';
import { UsersModule } from '../users/user.module';
import config from '../../config/configuration';
import configSchema from '../../config/config-schema';
import { DatabaseModule } from '../../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    // validate the environment variables
    ConfigModule.forRoot({
      validationSchema: configSchema,
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationOptions: {
        abortEarly: true,
      },
    }),
    UsersModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
