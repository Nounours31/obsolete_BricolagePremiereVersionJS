'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-24 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1770';
    this._commitGIT = '211a7dbe7b9da813379ac425f11ead59cb4df679';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}