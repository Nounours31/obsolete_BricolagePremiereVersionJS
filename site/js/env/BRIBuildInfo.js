'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-12 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1597';
    this._commitGIT = '2a2be2766c5c07b3cb3bdc28ebb4fab922563bc6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}