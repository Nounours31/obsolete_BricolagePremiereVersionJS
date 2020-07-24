'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-24 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1646';
    this._commitGIT = '3568e5d45d1bb68104992ab0d20324ae1fc80215';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}