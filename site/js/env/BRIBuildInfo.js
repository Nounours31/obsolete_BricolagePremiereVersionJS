'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-21 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1632';
    this._commitGIT = '603979d27e1a343603d80ee851fe9ba154c6e26e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}