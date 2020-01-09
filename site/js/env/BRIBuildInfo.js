'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-09 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-855';
    this._commitGIT = '579df461abba75b8608287263afd887277200165';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}