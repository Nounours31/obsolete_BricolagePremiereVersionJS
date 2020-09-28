'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-28 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1909';
    this._commitGIT = 'a828fbb7afea39149b937adefaae0d1ab4ce19e3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}