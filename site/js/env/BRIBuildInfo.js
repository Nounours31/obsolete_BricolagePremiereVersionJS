'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-31 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-331';
    this._commitGIT = '26cbfa94de1b196483b2304835048857c08e0632';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}