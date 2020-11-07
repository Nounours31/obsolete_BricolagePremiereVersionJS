'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-07 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-2067';
    this._commitGIT = 'e09fa20c3433aab0cc8d6ab57f889b2db9796b3a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}