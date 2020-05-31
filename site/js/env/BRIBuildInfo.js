'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-31 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1428';
    this._commitGIT = 'd074542bfdbe6c3897aa7926336adf0264a0ca6b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}