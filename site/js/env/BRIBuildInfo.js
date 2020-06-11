'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-11 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1474';
    this._commitGIT = '59eff262fe485d6e1144a4f130ebba8e0bdb91f2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}