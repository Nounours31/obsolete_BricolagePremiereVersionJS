'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-02 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1923';
    this._commitGIT = 'a8617c0b0f3ec0e3405677aa58baafa0c3857606';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}