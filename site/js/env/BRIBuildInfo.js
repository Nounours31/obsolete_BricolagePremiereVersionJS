'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-01 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1307';
    this._commitGIT = '9c9d5047f07aebf71660461098f6b1ab48ddb221';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}