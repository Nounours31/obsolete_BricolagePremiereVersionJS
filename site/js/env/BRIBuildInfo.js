'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-03 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2171';
    this._commitGIT = '26b709b482a4a537b1028337165efd61462711b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}