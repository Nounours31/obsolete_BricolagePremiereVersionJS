'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-03 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-707';
    this._commitGIT = '763cd04ff9ed1e47fe591cc6839a7b3412c54f8b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}