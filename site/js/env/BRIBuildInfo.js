'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-23 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2007';
    this._commitGIT = '3f6a6053f205af182b194f1ae48eeae9bf0324ac';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}