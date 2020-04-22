'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-22 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1271';
    this._commitGIT = '9e66471942aa19ad2237b025f9a99f0583fe3f2c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}