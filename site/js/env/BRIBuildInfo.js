'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-04 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1444';
    this._commitGIT = '1223c104faabe7e5bbc2785d0d8f7ec7c7fa38f6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}